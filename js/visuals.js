const scenes = [
  {id:"ocean",title:"Moonlit Tides",heading:"Moonlit<br><em>tides.</em>",mood:"OCEAN · SLOW TIDE",description:"Slow waves and a low, open soundscape.",sound:"Tidal hush",video:"../assets/videos/ocean.mp4",keywords:"ocean sea waves beach moon night blue water calm sleep lake river island tropical",tone:146.83,noise:"lowpass"},
  {id:"rain",title:"Rainy Window",heading:"Rainy<br><em>window.</em>",mood:"RAIN · WARM SHELTER",description:"Steady rain with soft tones held in the distance.",sound:"Sheltered rain",video:"../assets/videos/rain-static.mp4",keywords:"rain rainy window cozy night storm water sleep warm",tone:174.61,noise:"bandpass"},
  {id:"forest",title:"Forest Morning",heading:"Forest<br><em>morning.</em>",mood:"FOREST · FIRST LIGHT",description:"A quiet canopy accompanied by a gentle, breathing chord.",sound:"Canopy breath",video:"../assets/videos/forest.mp4",keywords:"forest trees birds nature green morning sunrise breeze peaceful garden meadow bamboo temple japan japanese zen flowers mountain mountains waterfall",tone:196,noise:"lowpass"},
  {id:"aurora",title:"Aurora Night",heading:"Aurora<br><em>night.</em>",mood:"SKY · NORTHERN LIGHT",description:"A spacious nocturnal drone beneath a moving sky.",sound:"Northern glow",video:"../assets/videos/aurora.mp4",keywords:"aurora sky space stars galaxy planet cosmic night northern lights ambient dream",tone:130.81,noise:"lowpass"},
  {id:"embers",title:"Quiet Embers",heading:"Quiet<br><em>embers.</em>",mood:"FIRE · SOFT GLOW",description:"Warm harmonic tones around a small, unhurried fire.",sound:"Fireside warmth",video:"../assets/videos/embers.mp4",keywords:"fire fireplace embers cozy warm cabin night sleep",tone:164.81,noise:"highpass"},
  {id:"clouds",title:"Above the Clouds",heading:"Above<br><em>clouds.</em>",mood:"AIR · OPEN HORIZON",description:"Slow, weightless tones with room to breathe.",sound:"Open air",video:"../assets/videos/clouds.mp4",keywords:"clouds sky air flying white blue open peaceful focus snow snowy winter desert valley horizon field city town street cafe underwater coral",tone:220,noise:"lowpass"}
];

const grid=document.querySelector("#sceneGrid"),search=document.querySelector("#sceneSearch"),prompt=document.querySelector("#escapePrompt"),experience=document.querySelector("#experience"),video=document.querySelector("#escapeVideo"),canvas=document.querySelector("#generatedScene"),ctx=canvas.getContext("2d");
let activeScene=scenes[0],sessionLength=300,remaining=300,playing=false,timer=null,audio=null,animationFrame=null,generatedMode=false,sceneSeed=1,generatedPrompt="";

function render(list=scenes){
  grid.innerHTML=list.map(scene=>`<button class="scene-card" type="button" data-scene="${scene.id}" aria-label="Choose ${scene.title}"><video muted playsinline loop preload="none" data-src="${scene.video}"></video><span class="card-shade"></span><span class="card-content"><span>${scene.mood}</span><strong>${scene.title}</strong><small>${scene.description}</small><i class="card-play" aria-hidden="true">▶</i></span></button>`).join("");
  document.querySelector("#emptyState").hidden=list.length>0;
  grid.querySelectorAll(".scene-card").forEach(card=>{
    const preview=card.querySelector("video");
    card.addEventListener("mouseenter",()=>{if(!preview.src)preview.src=preview.dataset.src;preview.play().catch(()=>{});});
    card.addEventListener("mouseleave",()=>{preview.pause();preview.currentTime=0;});
    card.onclick=()=>startExperience(scenes.find(scene=>scene.id===card.dataset.scene),false);
  });
}

function bestMatch(text){
  const words=text.toLowerCase().match(/[a-z]+/g)||[];
  const matches=scenes.map(scene=>({scene,score:words.reduce((sum,word)=>sum+(scene.keywords.split(" ").includes(word)?1:0),0)})).sort((a,b)=>b.score-a.score);
  return matches[0].score>0?matches[0].scene:null;
}

function formatTime(seconds){const minutes=Math.floor(seconds/60);return `${String(minutes).padStart(2,"0")}:${String(seconds%60).padStart(2,"0")}`;}

function selectedDuration(){
  const selected=document.querySelector("input[name='duration']:checked");
  if(selected.value!=="manual")return +selected.value;
  const amount=+document.querySelector("#manualTimeValue").value,unit=document.querySelector("#manualTimeUnit").value;
  return Math.round(amount*(unit==="minutes"?60:1));
}

function createSoundscape(scene){
  const AudioContext=window.AudioContext||window.webkitAudioContext;
  const context=new AudioContext(),master=context.createGain();
  master.gain.value=0;master.connect(context.destination);
  const promptTuning=.94+seeded(310)*.12;
  const oscillators=[1,.5,1.5].map((ratio,index)=>{const oscillator=context.createOscillator(),gain=context.createGain();oscillator.type=index===0?"sine":"triangle";oscillator.frequency.value=scene.tone*ratio*promptTuning;oscillator.detune.value=(seeded(320+index)-.5)*7;gain.gain.value=[.09,.035,.02][index];oscillator.connect(gain).connect(master);oscillator.start();return oscillator;});
  const buffer=context.createBuffer(1,context.sampleRate*3,context.sampleRate),data=buffer.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;
  const noise=context.createBufferSource(),filter=context.createBiquadFilter(),noiseGain=context.createGain();noise.buffer=buffer;noise.loop=true;filter.type=scene.noise;filter.frequency.value=scene.id==="rain"?1300:scene.id==="embers"?900:420;filter.Q.value=.6;noiseGain.gain.value=scene.id==="rain"?.055:.018;noise.connect(filter).connect(noiseGain).connect(master);noise.start();
  const lfo=context.createOscillator(),lfoGain=context.createGain();lfo.frequency.value=.07;lfoGain.gain.value=.025;lfo.connect(lfoGain).connect(master.gain);lfo.start();
  master.gain.linearRampToValueAtTime(+document.querySelector("#escapeVolume").value*.35,context.currentTime+2.5);
  return{context,master,nodes:[...oscillators,noise,lfo]};
}

function stopAudio(){if(!audio)return;const now=audio.context.currentTime;audio.master.gain.cancelScheduledValues(now);audio.master.gain.setValueAtTime(audio.master.gain.value,now);audio.master.gain.linearRampToValueAtTime(0,now+.25);const old=audio;setTimeout(()=>old.context.close(),350);audio=null;}

function seeded(index){const value=Math.sin(sceneSeed*91.7+index*37.1)*43758.5;return value-Math.floor(value);}
function promptStyle(){const text=generatedPrompt.toLowerCase();for(const style of ["underwater","city","desert","mountain","snow","space","japanese","temple"])if(text.includes(style))return style;return activeScene.id;}
function resizeCanvas(){const scale=Math.min(devicePixelRatio||1,1.5);canvas.width=innerWidth*scale;canvas.height=innerHeight*scale;ctx.setTransform(scale,0,0,scale,0,0);}
function sceneColors(text){const value=text.toLowerCase();if(/sunset|golden|warm/.test(value))return["#432c36","#b66e61","#e0aa77"];if(/night|moon|stars/.test(value))return["#06152c","#183c59","#76a6ae"];if(/pink|rose|dream/.test(value))return["#372e48","#89677f","#ddb1a8"];return{forest:["#173b33","#54745c","#c3c69b"],rain:["#15242d","#4d6268","#a7bbb8"],aurora:["#07152f","#334b74","#68c5a1"],embers:["#151820","#683129","#dd8953"],clouds:["#527d91","#a7bec1","#e5d5b8"],ocean:["#061d36","#245d6d","#85b8b5"]}[activeScene.id];}
function drawScene(now){
  const w=innerWidth,h=innerHeight,t=now*.001,style=promptStyle(),colors=sceneColors(generatedPrompt),sky=ctx.createLinearGradient(0,0,0,h);sky.addColorStop(0,colors[0]);sky.addColorStop(.62,colors[1]);sky.addColorStop(1,colors[2]);ctx.fillStyle=sky;ctx.fillRect(0,0,w,h);
  if(style==="underwater"){
    for(let i=0;i<42;i++){const y=(seeded(i+20)*h-t*(9+seeded(i)*13)+h)%h,x=seeded(i)*w+Math.sin(t*.3+i)*22;ctx.strokeStyle=`rgba(185,235,224,${.08+seeded(i)*.18})`;ctx.beginPath();ctx.moveTo(x,h);ctx.quadraticCurveTo(x+35,y+80,x,y);ctx.stroke();ctx.fillStyle="rgba(202,240,229,.22)";ctx.beginPath();ctx.arc(x,y,2+seeded(i)*5,0,Math.PI*2);ctx.fill();}
  }else if(style==="city"){
    for(let i=0;i<24;i++){const width=35+seeded(i)*80,height=h*(.15+seeded(i+20)*.46),x=i*w/22-20;ctx.fillStyle=`rgba(7,21,29,${.55+seeded(i)*.35})`;ctx.fillRect(x,h-height,width,height);for(let y=h-height+18;y<h-20;y+=22){ctx.fillStyle=`rgba(242,190,111,${.15+seeded(i+y)*.35})`;ctx.fillRect(x+10,y,4,6);}}
  }else if(style==="desert"){
    for(let layer=0;layer<4;layer++){ctx.beginPath();ctx.moveTo(0,h);for(let x=0;x<=w;x+=25)ctx.lineTo(x,h*(.58+layer*.1)+Math.sin(x*.004+layer+t*.025)*35);ctx.lineTo(w,h);ctx.fillStyle=["#ad7660","#a06a54","#815447","#563d3c"][layer];ctx.fill();}
  }else if(style==="mountain"){
    for(let layer=0;layer<4;layer++){ctx.beginPath();ctx.moveTo(0,h);for(let x=0;x<=w;x+=w/7){const peak=h*(.28+layer*.1+seeded(x+layer)*.25);ctx.lineTo(x,peak);}ctx.lineTo(w,h);ctx.fillStyle=`rgba(${20+layer*18},${48+layer*18},${55+layer*18},${.88-layer*.12})`;ctx.fill();}
  }else if(style==="space"){
    for(let i=0;i<140;i++){ctx.fillStyle=`rgba(255,255,255,${.25+seeded(i)*.7})`;ctx.fillRect(seeded(i)*w,seeded(i+100)*h,1+seeded(i)*1.5,1+seeded(i)*1.5);}const planet=ctx.createRadialGradient(w*.7,h*.32,5,w*.7,h*.32,w*.13);planet.addColorStop(0,"#a8d1cb");planet.addColorStop(.65,"#496d84");planet.addColorStop(1,"rgba(20,38,62,0)");ctx.fillStyle=planet;ctx.fillRect(0,0,w,h);
  }else if(style==="japanese"||style==="temple"){
    ctx.fillStyle="rgba(6,31,29,.72)";ctx.fillRect(w*.47,h*.42,w*.06,h*.4);for(let level=0;level<3;level++){const y=h*(.42+level*.11),half=w*(.1-level*.015);ctx.beginPath();ctx.moveTo(w*.5-half,y);ctx.lineTo(w*.5+half,y);ctx.lineTo(w*.5+half*.65,y-h*.055);ctx.lineTo(w*.5-half*.65,y-h*.055);ctx.fill();}for(let i=0;i<35;i++){ctx.fillStyle=`rgba(232,170,180,${.22+seeded(i)*.4})`;ctx.beginPath();ctx.arc(seeded(i)*w,(seeded(i+40)*h*.58+t*(4+seeded(i)*5))%h,2+seeded(i)*4,0,Math.PI*2);ctx.fill();}
  }else if(activeScene.id==="rain"){
    for(let i=0;i<100;i++){const x=seeded(i)*w,y=(seeded(i+100)*h+t*(180+seeded(i)*80))%h;ctx.strokeStyle="rgba(220,238,235,.24)";ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x-7,y+24);ctx.stroke();}
  }else if(activeScene.id==="forest"){
    for(let i=0;i<32;i++){const x=seeded(i)*w,top=h*(.12+seeded(i+40)*.34),width=10+seeded(i+70)*22;ctx.fillStyle=`rgba(7,42,32,${.45+seeded(i)*.45})`;ctx.fillRect(x,top,width,h-top);ctx.beginPath();ctx.moveTo(x-width*2,top+h*.14);ctx.lineTo(x+width/2,top-h*.2);ctx.lineTo(x+width*3,top+h*.14);ctx.fill();}
  }else if(activeScene.id==="aurora"){
    ctx.globalCompositeOperation="screen";for(let band=0;band<3;band++){ctx.beginPath();for(let x=-40;x<w+40;x+=14)ctx.lineTo(x,h*(.2+band*.1)+Math.sin(x*.006+t*.22+band)*52);ctx.strokeStyle=["rgba(75,222,165,.2)","rgba(99,148,230,.18)","rgba(171,99,216,.14)"][band];ctx.lineWidth=55;ctx.stroke();}ctx.globalCompositeOperation="source-over";
  }else if(activeScene.id==="embers"){
    const glow=ctx.createRadialGradient(w*.5,h*.78,0,w*.5,h*.78,w*.38);glow.addColorStop(0,"rgba(246,118,55,.7)");glow.addColorStop(1,"transparent");ctx.fillStyle=glow;ctx.fillRect(0,0,w,h);for(let i=0;i<48;i++){const life=(t*(.05+seeded(i)*.08)+seeded(i+50))%1;ctx.fillStyle=`rgba(255,170,75,${1-life})`;ctx.beginPath();ctx.arc(w*.5+(seeded(i)-.5)*w*.25+Math.sin(t+i)*18,h*.8-life*h*.55,1+seeded(i)*2,0,Math.PI*2);ctx.fill();}
  }else if(style==="snow"){
    for(let i=0;i<100;i++){const x=(seeded(i)*w+Math.sin(t*.35+i)*20)%w,y=(seeded(i+100)*h+t*(18+seeded(i)*22))%h;ctx.fillStyle=`rgba(255,255,255,${.25+seeded(i)*.6})`;ctx.beginPath();ctx.arc(x,y,1+seeded(i)*3,0,Math.PI*2);ctx.fill();}
  }else if(activeScene.id==="clouds"){
    for(let i=0;i<14;i++){const x=((seeded(i)*w+t*(7+seeded(i)*8))%(w+w*.4))-w*.2;ctx.fillStyle=`rgba(247,247,239,${.15+seeded(i)*.25})`;ctx.beginPath();ctx.ellipse(x,h*(.15+seeded(i+30)*.65),90+seeded(i+20)*150,35+seeded(i)*38,0,0,Math.PI*2);ctx.fill();}
  }else{
    ctx.fillStyle="rgba(243,235,202,.85)";ctx.beginPath();ctx.arc(w*.72,h*.2,Math.min(w,h)*.052,0,Math.PI*2);ctx.fill();for(let row=0;row<13;row++){ctx.beginPath();for(let x=-20;x<w+20;x+=16)ctx.lineTo(x,h*.56+row*22+Math.sin(x*.012+t*(.25+row*.02)+row)*7);ctx.strokeStyle=`rgba(195,231,225,${.3-row*.014})`;ctx.stroke();}
  }
  if(playing&&generatedMode)animationFrame=requestAnimationFrame(drawScene);
}
function startGeneratedScene(text){cancelAnimationFrame(animationFrame);generatedPrompt=text;sceneSeed=[...text].reduce((sum,char)=>sum+char.charCodeAt(0),1);resizeCanvas();drawScene(performance.now());}
function updateSession(){document.querySelector("#timeLeft").textContent=`${formatTime(remaining)} left`;document.querySelector("#sessionProgress").style.width=`${((sessionLength-remaining)/sessionLength)*100}%`;}

function startClock(){clearInterval(timer);timer=setInterval(()=>{if(!playing)return;remaining--;updateSession();if(remaining<=0)finishSession();},1000);}

function startExperience(scene,generated=false,description=""){
  activeScene=scene;sessionLength=selectedDuration();remaining=sessionLength;
  document.querySelector("#experienceMood").textContent=generated?"GENERATED VIDEO · ORIGINAL AUDIO":scene.mood;document.querySelector("#experienceTitle").innerHTML=scene.heading;document.querySelector("#experienceDescription").textContent=generated?`Created from “${description.slice(0,90)}${description.length>90?"…":""}”`:scene.description;document.querySelector("#soundName").textContent=generated?`${scene.sound} · unique mix`:scene.sound;
  generatedMode=generated;experience.classList.toggle("generated",generated);document.querySelector("#experienceLabel").textContent=generated?"GENERATED FROM YOUR WORDS":"YOUR VISUAL ESCAPE";
  playing=true;if(generated){video.pause();video.removeAttribute("src");startGeneratedScene(description);}else{video.src=scene.video;video.currentTime=0;video.play().catch(()=>{});}
  experience.classList.add("open");experience.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
  stopAudio();audio=createSoundscape(scene);document.querySelector("#playPause").textContent="Ⅱ";document.querySelector("#playPause").setAttribute("aria-label","Pause");updateSession();startClock();
}

function togglePlayback(){
  if(!experience.classList.contains("open"))return;
  playing=!playing;
  if(playing){if(generatedMode)drawScene(performance.now());else video.play().catch(()=>{});audio?.context.resume();startClock();}else{video.pause();cancelAnimationFrame(animationFrame);audio?.context.suspend();clearInterval(timer);}
  document.querySelector("#playPause").textContent=playing?"Ⅱ":"▶";document.querySelector("#playPause").setAttribute("aria-label",playing?"Pause":"Play");
}

function finishSession(){playing=false;clearInterval(timer);cancelAnimationFrame(animationFrame);video.pause();stopAudio();document.querySelector("#playPause").textContent="↻";document.querySelector("#playPause").setAttribute("aria-label","Restart session");document.querySelector("#timeLeft").textContent="Session complete";}

function closeExperience(){playing=false;clearInterval(timer);cancelAnimationFrame(animationFrame);video.pause();video.removeAttribute("src");video.load();stopAudio();experience.classList.remove("open","generated");experience.setAttribute("aria-hidden","true");document.body.style.overflow="";}

document.querySelector("#escapeBuilder").addEventListener("submit",event=>{event.preventDefault();const text=prompt.value.trim(),match=bestMatch(text),note=document.querySelector("#builderNote"),duration=selectedDuration();if(!text){note.textContent="Tell us a little about the place or feeling you want.";prompt.focus();return;}if(!match){note.textContent="Prompt isn't understood. Try describing a relaxing place, weather, time of day, or mood.";prompt.setAttribute("aria-invalid","true");prompt.focus();return;}if(duration<10||duration>3600){note.textContent="Manual time must be between 10 seconds and 1 hour.";document.querySelector("#manualTimeValue").focus();return;}prompt.removeAttribute("aria-invalid");note.textContent="Creating your animated scene and matching sound…";startExperience(match,true,text);});
document.querySelectorAll("[data-prompt]").forEach(button=>button.onclick=()=>{prompt.value=button.dataset.prompt;prompt.dispatchEvent(new Event("input"));prompt.focus();});
prompt.addEventListener("input",()=>{document.querySelector("#promptCount").textContent=`${prompt.value.length} / 180`;prompt.removeAttribute("aria-invalid");});
search.addEventListener("input",()=>{const query=search.value.toLowerCase().trim();render(scenes.filter(scene=>`${scene.title} ${scene.keywords}`.toLowerCase().includes(query)));});
document.querySelectorAll("input[name='duration']").forEach(input=>input.addEventListener("change",()=>{document.querySelector("#manualTime").hidden=!document.querySelector("#manualDuration").checked;}));
document.querySelector("#manualTimeUnit").addEventListener("change",event=>{const field=document.querySelector("#manualTimeValue"),minutes=event.target.value==="minutes";field.min=minutes?1:10;field.max=minutes?60:3600;if(+field.value>+field.max)field.value=field.max;if(+field.value<+field.min)field.value=field.min;});
document.querySelector("#playPause").onclick=()=>remaining<=0?startExperience(activeScene,generatedMode,generatedPrompt):togglePlayback();
document.querySelector("#closeExperience").onclick=closeExperience;
document.querySelector("#escapeVolume").oninput=event=>{if(audio)audio.master.gain.setTargetAtTime(+event.target.value*.35,audio.context.currentTime,.12);};
document.querySelector("#fullscreen").onclick=()=>document.fullscreenElement?document.exitFullscreen():experience.requestFullscreen?.();
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&experience.classList.contains("open"))closeExperience();if(event.code==="Space"&&experience.classList.contains("open")&&!event.target.closest("input,textarea,button")){event.preventDefault();togglePlayback();}});
window.addEventListener("resize",()=>{if(generatedMode&&experience.classList.contains("open"))resizeCanvas();});
render();
