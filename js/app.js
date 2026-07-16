const sounds = [
  {
    title: "Moonlit Shore",
    cat: "Nature",
    mood: "Ocean · Gentle waves",
    icon: "☾",
    bg: "radial-gradient(circle at 65% 30%,#72a7ac 0 5%,transparent 6%),linear-gradient(150deg,#244f57,#061f2b 72%)",
    type: "ocean",
  },
  {
    title: "Rain on Glass",
    cat: "Focus",
    mood: "Rain · Soft thunder",
    icon: "⌁",
    bg: "linear-gradient(120deg,rgba(8,26,30,.2),#0c2027),repeating-linear-gradient(100deg,#667c7d 0 2px,#263f45 3px 18px)",
    type: "rain",
  },
  {
    title: "Into the Pines",
    cat: "Nature",
    mood: "Forest · Morning birds",
    icon: "♧",
    bg: "radial-gradient(circle at 28% 20%,#d6b77e 0 3%,transparent 4%),linear-gradient(135deg,#8b916d,#183c36)",
    type: "forest",
  },
  {
    title: "Deep Focus",
    cat: "Focus",
    mood: "Brown noise · 60 min",
    icon: "◎",
    bg: "radial-gradient(circle at 70% 30%,#b58b72,#342f35 40%,#152b30)",
    type: "brown",
  },
  {
    title: "Distant Thunder",
    cat: "Sleep",
    mood: "Storm · Low rumble",
    icon: "ϟ",
    bg: "linear-gradient(160deg,#7a8793,#26323e 50%,#111c25)",
    type: "storm",
  },
  {
    title: "Floating",
    cat: "Meditate",
    mood: "Ambient · Weightless",
    icon: "○",
    bg: "radial-gradient(circle at 50% 40%,#cedbd7,#649b99 22%,#1b4d58 68%)",
    type: "drone",
  },
  {
    title: "Cabin Fire",
    cat: "Sleep",
    mood: "Fire · Cozy crackle",
    icon: "♨",
    bg: "radial-gradient(circle at 50% 80%,#f5b35a,#a34d2b 14%,#28251f 45%)",
    type: "fire",
  },
  {
    title: "Quiet Library",
    cat: "Focus",
    mood: "Room tone · Soft pages",
    icon: "▤",
    bg: "linear-gradient(135deg,#826f58,#302d2b 52%,#1c2c2e)",
    type: "room",
  },
  {
    title: "Summer Meadow",
    cat: "Nature",
    mood: "Breeze · Crickets",
    icon: "✣",
    bg: "linear-gradient(160deg,#b9cec2 0 34%,#849f78 35%,#3f654c)",
    type: "forest",
  },
  {
    title: "Soft Exhale",
    cat: "Meditate",
    mood: "Breath · Singing bowl",
    icon: "◡",
    bg: "radial-gradient(circle at 50% 52%,#e5dacb 0 10%,#afaaa5 11% 18%,#536d70 45%)",
    type: "bowl",
  },
  {
    title: "Night Train",
    cat: "Sleep",
    mood: "Rhythm · Distant rails",
    icon: "⇥",
    bg: "linear-gradient(160deg,#40506a,#111d32 55%,#080d18)",
    type: "train",
  },
  {
    title: "Morning Flow",
    cat: "Meditate",
    mood: "Water · New beginning",
    icon: "≈",
    bg: "linear-gradient(145deg,#d7d5b5,#6ba29a 40%,#1b5260)",
    type: "water",
  },
  {
    title: "Alpine Wind",
    cat: "Nature",
    mood: "Mountains · Cool breeze",
    icon: "∿",
    bg: "linear-gradient(155deg,#cad9d7,#76959a 42%,#334f59)",
    type: "wind",
  },
  {
    title: "Hidden Waterfall",
    cat: "Nature",
    mood: "Waterfall · Lush valley",
    icon: "≋",
    bg: "linear-gradient(130deg,#9fb7ad,#39736d 46%,#183b3b)",
    type: "water",
  },
  {
    title: "Café Murmur",
    cat: "Focus",
    mood: "Coffee shop · Soft voices",
    icon: "☕",
    bg: "radial-gradient(circle at 70% 25%,#d6aa72,#6c4f3f 38%,#2c2928)",
    type: "room",
  },
  {
    title: "Minimal Piano",
    cat: "Focus",
    mood: "Piano · Spacious notes",
    icon: "♫",
    bg: "linear-gradient(145deg,#a7b0b7,#465263 48%,#1d2733)",
    type: "piano",
  },
  {
    title: "Pink Noise",
    cat: "Focus",
    mood: "Balanced noise · Study",
    icon: "∿",
    bg: "radial-gradient(circle at 45% 35%,#c6959b,#70525e 48%,#332e3c)",
    type: "pink",
  },
  {
    title: "Starlit Void",
    cat: "Sleep",
    mood: "Deep space · Slow pulse",
    icon: "✦",
    bg: "radial-gradient(circle at 68% 24%,#d9d8e8 0 1%,transparent 2%),linear-gradient(145deg,#273454,#080f24)",
    type: "drone",
  },
  {
    title: "Singing Bowls",
    cat: "Meditate",
    mood: "Sound bath · Golden resonance",
    icon: "◡",
    bg: "radial-gradient(circle at 50% 62%,#d9bd76 0 12%,#796642 13% 24%,#263b3d 50%)",
    type: "bowl",
  },
  {
    title: "Desert Stillness",
    cat: "Meditate",
    mood: "Warm wind · Open space",
    icon: "◌",
    bg: "linear-gradient(165deg,#d8bd91,#a77b57 48%,#4d4d48)",
    type: "wind",
  },
  {
    title: "Gentle Sunrise",
    cat: "Meditate",
    mood: "Ambient music · Hopeful morning",
    icon: "☼",
    bg: "linear-gradient(145deg,#f0d3ad,#b58f80 48%,#536f73)",
    type: "harp",
  },
  {
    title: "Slow Bloom",
    cat: "Meditate",
    mood: "Warm pads · Emotional reset",
    icon: "❀",
    bg: "radial-gradient(circle at 45% 35%,#d9c6cf,#8d7c99 45%,#35435b)",
    type: "pad",
  },
  {
    title: "Weightless Piano",
    cat: "Focus",
    mood: "Soft piano · No pressure",
    icon: "♩",
    bg: "linear-gradient(140deg,#c8d2d4,#71878f 46%,#293b48)",
    type: "piano",
  },
  {
    title: "Quiet Strings",
    cat: "Focus",
    mood: "Ambient strings · Gentle clarity",
    icon: "⌇",
    bg: "linear-gradient(155deg,#b8aa98,#665f64 50%,#28333c)",
    type: "strings",
  },
  {
    title: "Lantern Lullaby",
    cat: "Sleep",
    mood: "Music box · Safe and slow",
    icon: "✧",
    bg: "radial-gradient(circle at 68% 25%,#f1d39b 0 4%,transparent 5%),linear-gradient(145deg,#35445f,#101a30)",
    type: "lullaby",
  },
  {
    title: "Cloud Bed",
    cat: "Sleep",
    mood: "Dreamy pads · Deep rest",
    icon: "☁",
    bg: "radial-gradient(ellipse at 50% 70%,#8797b1,#3d4a69 42%,#171d35)",
    type: "pad",
  },
  {
    title: "Temple Bells",
    cat: "Meditate",
    mood: "Soft bells · Present moment",
    icon: "◇",
    bg: "radial-gradient(circle at 50% 45%,#d2b975,#6f654d 34%,#263a3b)",
    type: "bells",
  },
  {
    title: "Bamboo Flute",
    cat: "Meditate",
    mood: "Breathy melody · Inner quiet",
    icon: "⌁",
    bg: "linear-gradient(150deg,#b9c9a1,#6b8c72 45%,#294949)",
    type: "flute",
  },
  {
    title: "River Stones",
    cat: "Nature",
    mood: "Stream · Pebbles and current",
    icon: "◌",
    bg: "radial-gradient(ellipse at 35% 70%,#a9aaa0,#688787 40%,#254c55)",
    type: "stream",
  },
  {
    title: "Coastal Birds",
    cat: "Nature",
    mood: "Sea breeze · Distant gulls",
    icon: "⌒",
    bg: "linear-gradient(165deg,#bfd6da 0 40%,#6b9da5 41%,#275967)",
    type: "coast",
  },
  {
    title: "Rainy Café Piano",
    cat: "Focus",
    mood: "Piano · Rain · Warm room",
    icon: "♬",
    bg: "linear-gradient(130deg,#8d7767,#493f3b 48%,#172c34)",
    type: "rainpiano",
  },
  {
    title: "Healing Light",
    cat: "Meditate",
    mood: "Ambient music · Gentle uplift",
    icon: "✺",
    bg: "radial-gradient(circle at 50% 35%,#efdcb5,#a8a88f 35%,#42666c)",
    type: "harp",
  },
  {
    title: "Island Kalimba",
    cat: "Meditate",
    mood: "Kalimba · Warm sunset",
    icon: "♢",
    bg: "linear-gradient(145deg,#e3bd82,#9b765c 48%,#405c60)",
    type: "kalimba",
  },
  {
    title: "Open Window",
    cat: "Focus",
    mood: "Acoustic guitar · Light breeze",
    icon: "♭",
    bg: "linear-gradient(150deg,#d7c5a5,#8a907a 45%,#42565b)",
    type: "guitar",
  },
  {
    title: "Sunday Lo-fi",
    cat: "Focus",
    mood: "Lo-fi beat · Unhurried work",
    icon: "◈",
    bg: "radial-gradient(circle at 65% 30%,#d7a481,#735b62 42%,#293c4b)",
    type: "lofi",
  },
  {
    title: "Velvet Cello",
    cat: "Meditate",
    mood: "Cello · Deep reassurance",
    icon: "𝄞",
    bg: "linear-gradient(140deg,#a37d70,#5c4853 52%,#26353e)",
    type: "cello",
  },
  {
    title: "Distant Choir",
    cat: "Sleep",
    mood: "Wordless voices · Floating calm",
    icon: "△",
    bg: "radial-gradient(circle at 50% 30%,#aeb9cf,#59677e 45%,#19233b)",
    type: "choir",
  },
  {
    title: "Crystal Garden",
    cat: "Meditate",
    mood: "Crystal tones · Clear mind",
    icon: "◇",
    bg: "radial-gradient(circle at 40% 35%,#d5f0e8,#76aaa4 42%,#31565f)",
    type: "crystal",
  },
  {
    title: "Safe Heartbeat",
    cat: "Sleep",
    mood: "Heartbeat · Soft cocoon",
    icon: "♡",
    bg: "radial-gradient(circle at 50% 50%,#a87277,#63424d 38%,#281f31)",
    type: "heartbeat",
  },
  {
    title: "Old Record Room",
    cat: "Focus",
    mood: "Vinyl · Mellow keys",
    icon: "◉",
    bg: "radial-gradient(circle at 50% 50%,#aa8b67 0 12%,#3d3533 13% 38%,#202b31 39%)",
    type: "vinyl",
  },
  {
    title: "Delta Descent",
    cat: "Sleep",
    mood: "Delta tones · Deep settling",
    icon: "▽",
    bg: "linear-gradient(155deg,#5b6580,#293248 48%,#0d1425)",
    type: "delta",
  },
  {
    title: "Theta Dreams",
    cat: "Sleep",
    mood: "Theta pulse · Dreamy drift",
    icon: "θ",
    bg: "radial-gradient(circle at 65% 25%,#8d83aa,#4b456e 42%,#1a1d3b)",
    type: "theta",
  },
  {
    title: "Monsoon Porch",
    cat: "Nature",
    mood: "Heavy rain · Sheltered porch",
    icon: "☂",
    bg: "linear-gradient(125deg,#819397,#3d565b 48%,#172c34)",
    type: "monsoon",
  },
  {
    title: "Snowy Silence",
    cat: "Nature",
    mood: "Winter wind · Soft hush",
    icon: "❄",
    bg: "linear-gradient(155deg,#e3e8e7,#9eafb6 50%,#526770)",
    type: "snow",
  },
  {
    title: "Tropical Night",
    cat: "Nature",
    mood: "Frogs · Crickets · Warm rain",
    icon: "☘",
    bg: "linear-gradient(145deg,#6d8a69,#315d4e 48%,#152f31)",
    type: "jungle",
  },
  {
    title: "Whale Passage",
    cat: "Nature",
    mood: "Deep ocean · Distant whales",
    icon: "〜",
    bg: "radial-gradient(ellipse at 50% 80%,#326d7c,#173e54 48%,#071b32)",
    type: "whale",
  },
  {
    title: "Woodland Creek",
    cat: "Nature",
    mood: "Creek · Birds · Soft leaves",
    icon: "♧",
    bg: "linear-gradient(145deg,#a2b493,#5b8069 46%,#254746)",
    type: "creekbirds",
  },
  {
    title: "Golden Hour Guitar",
    cat: "Meditate",
    mood: "Acoustic · Gentle optimism",
    icon: "☀",
    bg: "linear-gradient(155deg,#e5c17e,#b27b5c 50%,#555459)",
    type: "guitar",
  },
  {
    title: "Peaceful Marimba",
    cat: "Focus",
    mood: "Wooden tones · Easy momentum",
    icon: "▫",
    bg: "linear-gradient(140deg,#c39b6e,#796b55 50%,#30464a)",
    type: "kalimba",
  },
  {
    title: "Soft Synth Horizon",
    cat: "Focus",
    mood: "Analog pads · Wide attention",
    icon: "⌁",
    bg: "linear-gradient(150deg,#9eafbe,#63778e 46%,#263747)",
    type: "synth",
  },
  {
    title: "Midnight Jazz Room",
    cat: "Focus",
    mood: "Electric piano · Late night",
    icon: "♯",
    bg: "radial-gradient(circle at 70% 25%,#be986d,#514552 45%,#172637)",
    type: "jazz",
  },
  {
    title: "Paper Lanterns",
    cat: "Meditate",
    mood: "Chimes · Quiet evening",
    icon: "✧",
    bg: "linear-gradient(145deg,#d9b47c,#8c6758 45%,#3b4d54)",
    type: "chimes",
  },
  {
    title: "Breath by Breath",
    cat: "Meditate",
    mood: "Breath pulse · Grounding rhythm",
    icon: "◌",
    bg: "radial-gradient(circle at 50% 50%,#b9d5cc,#68988f 42%,#31555a)",
    type: "breath",
  },
  {
    title: "Warm Embrace",
    cat: "Meditate",
    mood: "Strings · Tender and slow",
    icon: "∞",
    bg: "radial-gradient(circle at 45% 35%,#dbb6aa,#9b7779 45%,#4b4b61)",
    type: "strings",
  },
  {
    title: "Rainy Bookshop",
    cat: "Focus",
    mood: "Rain · Vinyl · Quiet pages",
    icon: "▤",
    bg: "linear-gradient(135deg,#8b7968,#514643 48%,#23343b)",
    type: "rainvinyl",
  },
  {
    title: "Moon Piano",
    cat: "Sleep",
    mood: "Sparse piano · Night air",
    icon: "☽",
    bg: "radial-gradient(circle at 72% 22%,#e7dfbf 0 4%,transparent 5%),linear-gradient(145deg,#354460,#10182d)",
    type: "sleeppiano",
  },
  {
    title: "Deep Blue Drone",
    cat: "Sleep",
    mood: "Low drone · Slow breathing",
    icon: "●",
    bg: "radial-gradient(circle at 50% 45%,#426a7d,#203d59 45%,#0a1730)",
    type: "deepdrone",
  },
  {
    title: "Cozy Brown Noise",
    cat: "Sleep",
    mood: "Brown noise · Blanket soft",
    icon: "◎",
    bg: "radial-gradient(circle at 50% 40%,#806f65,#4c4141 46%,#242833)",
    type: "brownsoft",
  },
  {
    title: "Morning Mantra",
    cat: "Meditate",
    mood: "Soft drone · Fresh intention",
    icon: "○",
    bg: "linear-gradient(155deg,#d8d3a8,#8fa083 48%,#476369)",
    type: "mantra",
  },
  {
    title: "Aurora Waves",
    cat: "Sleep",
    mood: "Shimmering pads · Northern sky",
    icon: "⌇",
    bg: "linear-gradient(135deg,#79a6a5,#586b93 48%,#25274c)",
    type: "aurora",
  },
];
const titleOpeners = [
  "Quiet",
  "Gentle",
  "Distant",
  "Soft",
  "Moonlit",
  "Golden",
  "Hidden",
  "Still",
  "Tender",
  "Dreaming",
  "Calm",
  "Silver",
  "Warm",
  "Slow",
  "Peaceful",
  "Velvet",
  "Open",
  "Secret",
  "Restful",
  "Floating",
];
const titleScenes = [
  "Harbor",
  "Meadow",
  "Sanctuary",
  "Horizon",
  "Garden",
  "Cove",
  "Forest",
  "River",
  "Clouds",
  "Lantern",
  "Valley",
  "Tide",
  "Temple",
  "Rain",
  "Dawn",
  "Night",
  "Embers",
  "Breeze",
  "Starlight",
  "Refuge",
];
const titleEndings = [
  "Flow",
  "Dreams",
  "Ritual",
  "Moments",
  "Journey",
  "Echoes",
  "Light",
  "Space",
  "Waves",
  "Path",
];
const generatedModels = [
  ["Nature", "Ocean air · Restful waves", "ocean"],
  ["Nature", "Rainfall · Gentle shelter", "rain"],
  ["Nature", "Forest · Birds and leaves", "forest"],
  ["Nature", "Flowing water · Natural calm", "stream"],
  ["Nature", "Warm wind · Open landscape", "wind"],
  ["Nature", "Night wildlife · Distant chorus", "jungle"],
  ["Nature", "Deep sea · Whale song", "whale"],
  ["Focus", "Ambient piano · Clear attention", "piano"],
  ["Focus", "Brown noise · Steady concentration", "brown"],
  ["Focus", "Pink noise · Balanced focus", "pink"],
  ["Focus", "Lo-fi · Easy momentum", "lofi"],
  ["Focus", "Warm room · Quiet activity", "room"],
  ["Focus", "Soft synth · Wide attention", "synth"],
  ["Focus", "Acoustic guitar · Light work", "guitar"],
  ["Focus", "Vinyl keys · Mellow study", "vinyl"],
  ["Sleep", "Dream pads · Deep rest", "pad"],
  ["Sleep", "Delta tones · Slow settling", "delta"],
  ["Sleep", "Theta pulse · Gentle dreams", "theta"],
  ["Sleep", "Music box · Safe and slow", "lullaby"],
  ["Sleep", "Low drone · Night breathing", "deepdrone"],
  ["Sleep", "Soft noise · Cozy night", "brownsoft"],
  ["Sleep", "Sparse piano · Moonlit rest", "sleeppiano"],
  ["Sleep", "Wordless choir · Floating sleep", "choir"],
  ["Meditate", "Singing bowl · Present moment", "bowl"],
  ["Meditate", "Harp · Gentle uplift", "harp"],
  ["Meditate", "Kalimba · Warm reflection", "kalimba"],
  ["Meditate", "Breath pulse · Grounding", "breath"],
  ["Meditate", "Soft strings · Emotional ease", "strings"],
  ["Meditate", "Crystal tones · Clear mind", "crystal"],
  ["Meditate", "Bamboo flute · Inner quiet", "flute"],
];
const generatedColors = [
  ["#8aa9a2", "#315c62", "#112f39"],
  ["#b39a83", "#685b56", "#29383e"],
  ["#9a91ac", "#555472", "#222b47"],
  ["#b9b58e", "#66795e", "#2d4b49"],
  ["#a6b6bd", "#526c78", "#203541"],
  ["#c8a47c", "#805e55", "#35414a"],
];
for (let i = sounds.length; i < 1500; i++) {
  const model = generatedModels[i % generatedModels.length],
    colors = generatedColors[(i * 7) % generatedColors.length];
  const a = titleOpeners[i % titleOpeners.length],
    b = titleScenes[Math.floor(i / titleOpeners.length) % titleScenes.length],
    c =
      titleEndings[
        Math.floor(i / (titleOpeners.length * titleScenes.length)) %
          titleEndings.length
      ];
  sounds.push({
    title: `${a} ${b} ${c}`,
    cat: model[0],
    mood: model[1],
    icon: ["○", "≈", "✦", "☾", "∿", "◇", "◌"][i % 7],
    bg: `radial-gradient(circle at ${30 + (i % 45)}% ${20 + (i % 35)}%,${colors[0]},${colors[1]} 45%,${colors[2]})`,
    type: model[2],
    seed: i,
  });
}
let filtered = [...sounds],
  current = 0,
  playing = false,
  ctx,
  master,
  nodes = [],
  loops = [],
  seconds = 0,
  tick,
  muted = false,
  visibleCount = 12;
let sonicVariation = 1;
const saved = new Set(
  JSON.parse(localStorage.getItem("drift-favorites") || "[]"),
);
const grid = document.querySelector("#soundGrid"),
  player = document.querySelector("#player"),
  playBtn = document.querySelector("#playBtn");
function render() {
  const shown = filtered.slice(0, visibleCount);
  grid.innerHTML = shown.length
    ? shown
        .map(
          (s, i) =>
            `<article class="card" style="--bg:${s.bg}"><div class="card-top"><span class="tag">${s.cat.toUpperCase()}</span><button class="heart ${saved.has(s.title) ? "saved" : ""}" data-save="${s.title}" aria-label="Save ${s.title}">${saved.has(s.title) ? "♥" : "♡"}</button></div><h3>${s.title}</h3><p>${s.mood}</p><button class="card-play" data-play="${i}" aria-label="Play ${s.title}">▶</button></article>`,
        )
        .join("")
    : `<div class="empty">${document.querySelector(".filter.active")?.dataset.filter === "Favorites" ? "No favorites yet. Tap the heart on any sound to keep it here." : "No sounds found. Try another mood."}</div>`;
  document.querySelector("#resultCount").textContent =
    `${filtered.length} soundscape${filtered.length === 1 ? "" : "s"}`;
  document.querySelector("#favoriteCount").textContent = saved.size;
  document
    .querySelector("#loadMore")
    .classList.toggle("hidden", visibleCount >= filtered.length);
}
render();
function noise(color = "white") {
  const length = ctx.sampleRate * 3,
    b = ctx.createBuffer(1, length, ctx.sampleRate),
    d = b.getChannelData(0);
  let last = 0,
    p0 = 0,
    p1 = 0;
  for (let i = 0; i < length; i++) {
    const w = Math.random() * 2 - 1;
    if (color === "brown") {
      last = (last + 0.02 * w) / 1.02;
      d[i] = last * 3.5;
    } else if (color === "pink") {
      p0 = 0.997 * p0 + w * 0.0296;
      p1 = 0.985 * p1 + w * 0.0325;
      d[i] = (p0 + p1 + w * 0.18) * 0.65;
    } else d[i] = w;
  }
  const src = ctx.createBufferSource();
  src.buffer = b;
  src.loop = true;
  return src;
}
function noiseLayer(color, frequency, amount, type = "lowpass") {
  const src = noise(color),
    f = ctx.createBiquadFilter(),
    g = ctx.createGain();
  f.type = type;
  f.frequency.value = frequency * sonicVariation;
  g.gain.value = amount;
  src.connect(f).connect(g).connect(master);
  src.start();
  nodes.push(src, f, g);
  return g;
}
function tone(freq, amount = 0.06, wave = "sine", attack = 0.8, release = 5) {
  const o = ctx.createOscillator(),
    g = ctx.createGain(),
    now = ctx.currentTime;
  o.type = wave;
  o.frequency.value = freq * sonicVariation;
  g.gain.setValueAtTime(0.0001, now);
  g.gain.exponentialRampToValueAtTime(amount, now + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, now + release);
  o.connect(g).connect(master);
  o.start(now);
  o.stop(now + release + 0.1);
  nodes.push(o, g);
}
function repeatMelody(notes, pace, wave = "sine", amount = 0.07) {
  let step = 0;
  const play = () => {
    tone(
      notes[step++ % notes.length],
      amount,
      wave,
      0.35,
      Math.max(2.8, pace * 0.85),
    );
  };
  play();
  loops.push(setInterval(play, pace * 1000));
}
function continuousTone(freq, amount, wave = "sine", movement = 0.08) {
  const o = ctx.createOscillator(),
    g = ctx.createGain(),
    lfo = ctx.createOscillator(),
    depth = ctx.createGain();
  o.type = wave;
  o.frequency.value = freq * sonicVariation;
  g.gain.value = amount;
  lfo.frequency.value = movement;
  depth.gain.value = amount * 0.35;
  lfo.connect(depth).connect(g.gain);
  o.connect(g).connect(master);
  o.start();
  lfo.start();
  nodes.push(o, g, lfo, depth);
}
function buildSound(s) {
  const t = s.type;
  if (t === "rain" || t === "rainpiano") {
    noiseLayer("white", 1800, 0.28, "highpass");
    noiseLayer("pink", 700, 0.13);
  } else if (t === "ocean") {
    const g = noiseLayer("pink", 620, 0.32);
    const l = ctx.createOscillator(),
      d = ctx.createGain();
    l.frequency.value = 0.09;
    d.gain.value = 0.22;
    l.connect(d).connect(g.gain);
    l.start();
    nodes.push(l, d);
  } else if (["water", "stream"].includes(t)) {
    noiseLayer("white", 1050, 0.19);
    noiseLayer("pink", 2600, 0.12, "bandpass");
  } else if (t === "fire") {
    noiseLayer("brown", 500, 0.22);
    noiseLayer("white", 2800, 0.07, "highpass");
  } else if (t === "storm") {
    noiseLayer("brown", 115, 0.38);
    noiseLayer("pink", 900, 0.12);
  } else if (t === "brown") noiseLayer("brown", 420, 0.43);
  else if (t === "pink") noiseLayer("pink", 1250, 0.34);
  else if (t === "wind") {
    noiseLayer("pink", 850, 0.24);
    continuousTone(98, 0.025, "sine", 0.04);
  } else if (t === "train") {
    noiseLayer("brown", 300, 0.3);
    continuousTone(55, 0.06, "triangle", 1.7);
  } else if (t === "room") {
    noiseLayer("pink", 900, 0.09);
    continuousTone(82, 0.025, "sine", 0.06);
  } else if (["forest", "coast"].includes(t)) {
    noiseLayer("pink", 1300, 0.12);
    repeatMelody(
      t === "coast" ? [880, 1174, 988] : [1318, 1567, 1174, 1760],
      4.8,
      "sine",
      0.018,
    );
  } else if (t === "bowl") {
    continuousTone(110, 0.035);
    repeatMelody([220, 277, 330, 220], 6.5, "sine", 0.1);
  } else if (t === "drone" || t === "pad") {
    [110, 164.81, 220, 261.63].forEach((f, i) =>
      continuousTone(f, 0.035 / (i * 0.3 + 1), "sine", 0.035 + i * 0.01),
    );
  } else if (t === "piano") {
    continuousTone(110, 0.018);
    repeatMelody(
      [261.63, 329.63, 392, 493.88, 392, 329.63],
      3.2,
      "triangle",
      0.055,
    );
  } else if (t === "strings") {
    [130.81, 196, 261.63, 329.63].forEach((f, i) =>
      continuousTone(f, 0.028, "sawtooth", 0.025 + i * 0.008),
    );
  } else if (t === "lullaby") {
    repeatMelody(
      [523.25, 659.25, 783.99, 659.25, 587.33, 523.25],
      2.7,
      "sine",
      0.065,
    );
  } else if (t === "bells") {
    repeatMelody([440, 659.25, 880, 587.33], 5.2, "sine", 0.085);
  } else if (t === "flute") {
    noiseLayer("pink", 1500, 0.035);
    repeatMelody([392, 440, 523.25, 493.88, 440], 3.8, "sine", 0.06);
  } else if (t === "harp") {
    repeatMelody(
      [261.63, 329.63, 392, 523.25, 659.25, 523.25, 392],
      2.4,
      "triangle",
      0.06,
    );
  } else if (t === "kalimba") {
    repeatMelody(
      [392, 523.25, 659.25, 587.33, 493.88, 523.25],
      1.8,
      "sine",
      0.075,
    );
  } else if (t === "guitar") {
    repeatMelody(
      [196, 246.94, 293.66, 329.63, 293.66, 246.94],
      2.15,
      "triangle",
      0.052,
    );
    continuousTone(98, 0.012, "sine", 0.04);
  } else if (t === "lofi") {
    noiseLayer("pink", 1600, 0.035);
    continuousTone(65.41, 0.045, "sine", 1.25);
    repeatMelody([261.63, 311.13, 392, 349.23], 2.6, "triangle", 0.045);
  } else if (t === "cello") {
    [65.41, 98, 130.81, 164.81].forEach((f, i) =>
      continuousTone(f, 0.04 / (i * 0.3 + 1), "sawtooth", 0.022 + i * 0.006),
    );
  } else if (t === "choir") {
    [130.81, 164.81, 196, 261.63].forEach((f, i) =>
      continuousTone(f, 0.027, "sine", 0.018 + i * 0.004),
    );
  } else if (t === "crystal") {
    repeatMelody([659.25, 987.77, 783.99, 1174.66], 4.4, "sine", 0.065);
  } else if (t === "heartbeat") {
    noiseLayer("brown", 150, 0.09);
    continuousTone(48, 0.09, "sine", 1.12);
  } else if (t === "vinyl") {
    noiseLayer("white", 3800, 0.028, "highpass");
    repeatMelody([220, 261.63, 329.63, 293.66], 3.1, "triangle", 0.038);
  } else if (t === "delta") {
    continuousTone(72, 0.065, "sine", 2);
    continuousTone(74, 0.055, "sine", 2);
  } else if (t === "theta") {
    continuousTone(110, 0.05, "sine", 0.35);
    continuousTone(116, 0.05, "sine", 0.35);
  } else if (t === "monsoon") {
    noiseLayer("white", 1300, 0.35, "highpass");
    noiseLayer("brown", 125, 0.2);
  } else if (t === "snow") {
    noiseLayer("pink", 1050, 0.1);
    continuousTone(132, 0.018, "sine", 0.025);
  } else if (t === "jungle") {
    noiseLayer("pink", 900, 0.11);
    repeatMelody([880, 1174, 987.77, 1318.51], 2.9, "sine", 0.018);
  } else if (t === "whale") {
    noiseLayer("brown", 340, 0.16);
    repeatMelody([110, 98, 82.41, 110], 7.5, "sine", 0.1);
  } else if (t === "creekbirds") {
    noiseLayer("white", 1100, 0.16);
    repeatMelody([1318.51, 1567.98, 1760, 1396.91], 3.6, "sine", 0.018);
  } else if (t === "synth") {
    [110, 138.59, 164.81, 220].forEach((f, i) =>
      continuousTone(f, 0.03, "triangle", 0.035 + i * 0.008),
    );
  } else if (t === "jazz") {
    noiseLayer("white", 4000, 0.018, "highpass");
    repeatMelody([220, 261.63, 311.13, 392, 349.23], 2.7, "triangle", 0.048);
  } else if (t === "chimes") {
    repeatMelody([523.25, 783.99, 659.25, 987.77, 587.33], 3.9, "sine", 0.06);
  } else if (t === "breath") {
    const g = noiseLayer("pink", 700, 0.16),
      l = ctx.createOscillator(),
      d = ctx.createGain();
    l.frequency.value = 0.1;
    d.gain.value = 0.13;
    l.connect(d).connect(g.gain);
    l.start();
    nodes.push(l, d);
  } else if (t === "rainvinyl") {
    noiseLayer("white", 1700, 0.2, "highpass");
    noiseLayer("white", 3900, 0.025, "highpass");
    repeatMelody([220, 261.63, 329.63], 4, "triangle", 0.028);
  } else if (t === "sleeppiano") {
    continuousTone(82.41, 0.018);
    repeatMelody([261.63, 329.63, 392, 329.63, 293.66], 4.2, "triangle", 0.035);
  } else if (t === "deepdrone") {
    [55, 82.41, 110].forEach((f, i) =>
      continuousTone(f, 0.052 / (i * 0.25 + 1), "sine", 0.018 + i * 0.005),
    );
  } else if (t === "brownsoft") {
    noiseLayer("brown", 280, 0.32);
    noiseLayer("pink", 650, 0.05);
  } else if (t === "mantra") {
    continuousTone(110, 0.045);
    continuousTone(164.81, 0.025);
    repeatMelody([220, 277.18, 330], 6, "sine", 0.045);
  } else if (t === "aurora") {
    [146.83, 220, 293.66, 369.99].forEach((f, i) =>
      continuousTone(f, 0.025, "sine", 0.02 + i * 0.007),
    );
  }
  if (t === "rainpiano")
    repeatMelody([261.63, 329.63, 392, 329.63], 3.7, "triangle", 0.045);
}
function startSound(s) {
  stopNodes();
  ctx ||= new (window.AudioContext || window.webkitAudioContext)();
  if (ctx.state === "suspended") ctx.resume();
  sonicVariation = Math.pow(
    2,
    ((((s.seed || sounds.indexOf(s)) * 7) % 9) - 4) / 24,
  );
  master = ctx.createGain();
  master.gain.value = +document.querySelector("#volume").value * 0.95;
  master.connect(ctx.destination);
  buildSound(s);
  playing = true;
  current = sounds.indexOf(s);
  seconds = 0;
  clearInterval(tick);
  tick = setInterval(() => {
    seconds++;
    document.querySelector("#timer").textContent =
      `${String((seconds / 60) | 0).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  }, 1000);
  updatePlayer(s);
}
function stopNodes() {
  nodes.forEach((n) => {
    try {
      n.stop?.();
    } catch {}
  });
  loops.forEach(clearInterval);
  nodes = [];
  loops = [];
  clearInterval(tick);
}
function updatePlayer(s) {
  player.classList.add("visible", "playing");
  document.querySelector("#nowTitle").textContent = s.title;
  document.querySelector("#nowCategory").textContent = s.mood;
  document.querySelector("#nowArt").textContent = s.icon;
  playBtn.textContent = "Ⅱ";
}
function toggle() {
  if (!ctx || !nodes.length) return startSound(sounds[current]);
  if (ctx.state === "running") {
    ctx.suspend();
    playing = false;
    player.classList.remove("playing");
    playBtn.textContent = "▶";
    clearInterval(tick);
  } else {
    ctx.resume();
    playing = true;
    player.classList.add("playing");
    playBtn.textContent = "Ⅱ";
    tick = setInterval(() => {
      seconds++;
      document.querySelector("#timer").textContent =
        `${String((seconds / 60) | 0).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
    }, 1000);
  }
}
grid.addEventListener("click", (e) => {
  const p = e.target.closest("[data-play]");
  if (p) startSound(filtered[+p.dataset.play]);
  const h = e.target.closest("[data-save]");
  if (h) {
    saved.has(h.dataset.save)
      ? saved.delete(h.dataset.save)
      : saved.add(h.dataset.save);
    localStorage.setItem("drift-favorites", JSON.stringify([...saved]));
    h.classList.toggle("saved");
    h.textContent = saved.has(h.dataset.save) ? "♥" : "♡";
    showToast(
      saved.has(h.dataset.save)
        ? "Saved to your library"
        : "Removed from library",
    );
    document.querySelector("#favoriteCount").textContent = saved.size;
    if (document.querySelector(".filter.active")?.dataset.filter === "Favorites") {
      filtered = sounds.filter((sound) => saved.has(sound.title));
      render();
    }
  }
});
document.querySelectorAll(".filter").forEach(
  (b) =>
    (b.onclick = () => {
      document
        .querySelectorAll(".filter")
        .forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      filtered =
        b.dataset.filter === "All"
          ? [...sounds]
          : b.dataset.filter === "Favorites"
            ? sounds.filter((sound) => saved.has(sound.title))
            : sounds.filter((s) => s.cat === b.dataset.filter);
      visibleCount = 12;
      render();
    }),
);
document.querySelector("#searchInput").oninput = (e) => {
  const q = e.target.value.toLowerCase();
  filtered = sounds.filter((s) =>
    (s.title + s.cat + s.mood).toLowerCase().includes(q),
  );
  visibleCount = 12;
  render();
};
document.querySelector("#loadMore").onclick = () => {
  visibleCount += 12;
  render();
};
document.querySelectorAll(".playlist-card").forEach(
  (card) =>
    (card.onclick = () => {
      const pool = sounds.filter((s) => s.cat === card.dataset.playlist);
      startSound(pool[(Math.random() * pool.length) | 0]);
      showToast(
        `${card.querySelector("strong").textContent.replace(/\s+/g, " ")} started`,
      );
    }),
);
document.querySelector(".search-toggle").onclick = () => {
  document.querySelector("#library").scrollIntoView();
  setTimeout(() => document.querySelector("#searchInput").focus(), 500);
};
document.querySelector("#startDrifting").onclick = () => startSound(sounds[0]);
document.querySelector("#surpriseMe").onclick = () =>
  startSound(sounds[(Math.random() * sounds.length) | 0]);
document.querySelector("#ritualPlay").onclick = () => startSound(sounds[9]);
playBtn.onclick = toggle;
document.querySelector("#nextBtn").onclick = () =>
  startSound(sounds[(current + 1) % sounds.length]);
document.querySelector("#prevBtn").onclick = () =>
  startSound(sounds[(current - 1 + sounds.length) % sounds.length]);
document.querySelector("#volume").oninput = (e) => {
  if (master) master.gain.value = +e.target.value * 0.95;
};
document.querySelector("#volumeBtn").onclick = () => {
  muted = !muted;
  if (master)
    master.gain.value = muted
      ? 0
      : +document.querySelector("#volume").value * 0.95;
  document.querySelector("#volumeBtn").textContent = muted ? "○" : "◕";
};
document.querySelector("#wave").innerHTML = Array.from(
  { length: 80 },
  (_, i) =>
    `<i style="--h:${5 + Math.random() * 22}px;--d:-${Math.random()}s"></i>`,
).join("");
function showToast(text) {
  const t = document.querySelector("#toast");
  t.textContent = text;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 1600);
}

// Calm tools
let effectsOn = localStorage.getItem("drift-effects") !== "off",
  fxCtx;
const effectsToggle = document.querySelector("#effectsToggle");
function updateEffectsToggle() {
  effectsToggle.classList.toggle("off", !effectsOn);
  effectsToggle.setAttribute("aria-pressed", String(effectsOn));
  effectsToggle.innerHTML = effectsOn
    ? "<span>♪</span> Effects on"
    : "<span>♪</span> Effects off";
}
updateEffectsToggle();
effectsToggle.onclick = () => {
  effectsOn = !effectsOn;
  localStorage.setItem("drift-effects", effectsOn ? "on" : "off");
  updateEffectsToggle();
  if (effectsOn) effectTone(523.25, 784, 0.45, 0.055);
};
function effectTone(from, to, duration = 0.7, volume = 0.045, wave = "sine") {
  if (!effectsOn) return;
  fxCtx ||= new (window.AudioContext || window.webkitAudioContext)();
  fxCtx.resume();
  const o = fxCtx.createOscillator(),
    g = fxCtx.createGain(),
    now = fxCtx.currentTime;
  o.type = wave;
  o.frequency.setValueAtTime(from, now);
  o.frequency.exponentialRampToValueAtTime(to, now + duration);
  g.gain.setValueAtTime(0.0001, now);
  g.gain.exponentialRampToValueAtTime(volume, now + 0.04);
  g.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  o.connect(g).connect(fxCtx.destination);
  o.start(now);
  o.stop(now + duration + 0.05);
}
function breathCue(inhale) {
  if (!effectsOn) return;
  fxCtx ||= new (window.AudioContext || window.webkitAudioContext)();
  fxCtx.resume();
  const length = fxCtx.sampleRate * 1.4,
    b = fxCtx.createBuffer(1, length, fxCtx.sampleRate),
    data = b.getChannelData(0);
  for (let i = 0; i < length; i++)
    data[i] = (Math.random() * 2 - 1) * (1 - i / length);
  const src = fxCtx.createBufferSource(),
    filter = fxCtx.createBiquadFilter(),
    gain = fxCtx.createGain(),
    now = fxCtx.currentTime;
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(inhale ? 380 : 900, now);
  filter.frequency.exponentialRampToValueAtTime(inhale ? 1000 : 320, now + 1.3);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.055, now + 0.25);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.35);
  src.buffer = b;
  src.connect(filter).connect(gain).connect(fxCtx.destination);
  src.start();
}

let breathing = false,breathLoop;

const breathButton = document.querySelector("#breathButton"),
  breathStage = document.querySelector(".breath-stage"),
  breathText = document.querySelector("#breathText");
breathButton.onclick = () => {
  breathing = !breathing;
  if (!breathing) {
    clearInterval(breathLoop);
    breathStage.classList.remove("active");
    breathText.textContent = "Breathe";
    breathButton.innerHTML = "Begin breathing <span>→</span>";
    effectTone(440, 330, 0.45, 0.025);
    return;
  }
  breathStage.classList.add("active");
  breathText.textContent = "Breathe in";
  breathButton.innerHTML = "Pause <span>Ⅱ</span>";
  let inhale = true;
  breathCue(true);
  breathLoop = setInterval(() => {
    inhale = !inhale;
    breathText.textContent = inhale ? "Breathe in" : "Breathe out";
    breathCue(inhale);
  }, 4000);
};

const rippleStage = document.querySelector(".ripple-stage");
function makeRipple(x, y) {
  const ripple = document.createElement("i");
  ripple.className = "ripple";
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  rippleStage.appendChild(ripple);
  setTimeout(() => ripple.remove(), 2500);
}
rippleStage.onclick = (e) => {
  const box = rippleStage.getBoundingClientRect(),
    x = e.clientX - box.left,
    y = e.clientY - box.top;
  makeRipple(x, y);
  const pitch = 420 + (1 - y / box.height) * 420;
  effectTone(pitch, pitch * 0.72, 0.8, 0.045);
};
document.querySelector("#clearRipples").onclick = () => {
  rippleStage.querySelectorAll(".ripple").forEach((r) => r.remove());
  effectTone(620, 310, 1, 0.035);
  showToast("The water is still again");
};

const releaseNote = document.querySelector("#releaseNote"),
noteCount = document.querySelector("#noteCount"),
  releaseStage = document.querySelector(".release-stage");
releaseNote.value = localStorage.getItem("drift-release-note") || "";
noteCount.textContent = releaseNote.value.length;
releaseNote.oninput = () => (noteCount.textContent = releaseNote.value.length);


document.querySelector("#saveNote").onclick = () => {
  localStorage.setItem("drift-release-note", releaseNote.value);
  if (releaseNote.value) {
    effectTone(392, 659.25, 0.75, 0.04);
    setTimeout(() => effectTone(523.25, 784, 0.7, 0.03), 140);
  }
  showToast(
    releaseNote.value ? "Kept privately on this device" : "Your note is empty",
  );
};
document.querySelector("#releaseNoteButton").onclick = () => {
  if (!releaseNote.value) return showToast("There is nothing to release");
  effectTone(660, 165, 1.3, 0.05, "triangle");
  releaseStage.classList.add("releasing");
  localStorage.removeItem("drift-release-note");
  setTimeout(() => {
    releaseNote.value = "";
    noteCount.textContent = "0";
    releaseStage.classList.remove("releasing");
    showToast("Released. Take one easy breath.");
  }, 900);
};

// Opening headphone recommendation
const headphoneIntro = document.querySelector("#headphoneIntro"),
  enterDrift = document.querySelector("#enterDrift");
document.body.style.overflow = "hidden";
let introClosed = false;
function closeIntro() {
  if (introClosed) return;
  introClosed = true;
  headphoneIntro.classList.add("leaving");
  document.body.style.overflow = "";
  setTimeout(() => headphoneIntro.remove(), 850);
}
const introTimer = setTimeout(closeIntro, 3400);
enterDrift.focus();
enterDrift.onclick = () => {
  clearTimeout(introTimer);
  closeIntro();
};
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    clearTimeout(introTimer);
    closeIntro();
  }
});

// Drag-to-discover hero recommendations
const hero = document.querySelector(".hero"),
  heroSuggestion = document.querySelector("#heroSuggestion");
const suggestions = [0, 15, 22, 26, 31, 34, 38, 43, 47, 52, 56, 59];
const suggestionAccents = [
  "#8fd1c7",
  "#efad98",
  "#bea7df",
  "#e0c06f",
  "#89b9d4",
  "#d59aaa",
];
let suggestionPosition = 0,
  dragStartY = 0,
  heroDragging = false;
const pullIndicator = document.querySelector("#pullIndicator");
function showSuggestion(direction = 1) {
  suggestionPosition =
    (suggestionPosition + direction + suggestions.length) % suggestions.length;
  const s = sounds[suggestions[suggestionPosition]];
  document.querySelector("#suggestionTitle").textContent = s.title;
  document.querySelector("#suggestionMood").textContent = s.mood;
  document.querySelector("#suggestionLabel").textContent =
    `SUGGESTED FOR ${s.cat.toUpperCase()}`;
  hero.style.setProperty(
    "--hero-accent",
    suggestionAccents[suggestionPosition % suggestionAccents.length],
  );
  hero.classList.remove("suggesting");
  void hero.offsetWidth;
  hero.classList.add("suggesting");
}
document.addEventListener("pointerdown", (event) => {
  if (window.scrollY > 2 || event.clientY > 130 || event.target.closest("button,a,input")) return;
  dragStartY = event.clientY;
  heroDragging = true;
});
document.addEventListener("pointermove", (event) => {
  if (!heroDragging) return;
  const distance = Math.max(0, Math.min(110, event.clientY - dragStartY));
  if (distance < 4) return;
  pullIndicator.classList.add("pulling");
  pullIndicator.classList.toggle("ready", distance >= 70);
  pullIndicator.style.marginTop = `${Math.min(distance * 0.28, 24)}px`;
  pullIndicator.innerHTML = distance >= 70
    ? "<span>↓</span> RELEASE FOR A NEW SUGGESTION"
    : "<span>↓</span> KEEP PULLING";
});
function finishTopPull(event) {
  if (!heroDragging) return;
  const distance = Math.max(0, event.clientY - dragStartY);
  heroDragging = false;
  if (distance >= 70) {
    showSuggestion(1);
    hero.classList.remove("pull-complete");
    void hero.offsetWidth;
    hero.classList.add("pull-complete");
    showToast("A new suggestion is ready");
  }
  pullIndicator.classList.remove("pulling", "ready");
  pullIndicator.style.marginTop = "";
  pullIndicator.innerHTML = "<span>↓</span> PULL DOWN FOR A NEW SUGGESTION";
}
document.addEventListener("pointerup", finishTopPull);
document.addEventListener("pointercancel", () => {
  heroDragging = false;
  pullIndicator.classList.remove("pulling", "ready");
  pullIndicator.style.marginTop = "";
});
heroSuggestion.onclick = () =>
  startSound(sounds[suggestions[suggestionPosition]]);

// Responsive navigation
const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
function closeMenu() {
  menuToggle.classList.remove("open");
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
}
menuToggle.onclick = () => {
  const opening = !mainNav.classList.contains("open");
  mainNav.classList.toggle("open", opening);
  menuToggle.classList.toggle("open", opening);
  menuToggle.setAttribute("aria-expanded", String(opening));
  menuToggle.setAttribute("aria-label", opening ? "Close menu" : "Open menu");
};
mainNav.querySelectorAll("a").forEach((link) => (link.onclick = closeMenu));
window.addEventListener("resize", () => {
  if (window.innerWidth > 950) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mainNav.classList.contains("open")) closeMenu();
});

// Discovery shortcuts and scroll feedback
document.querySelectorAll(".mood-choice").forEach((choice) => {
  choice.onclick = () => {
    const pool = sounds.filter((sound) => sound.cat === choice.dataset.mood);
    const selection = pool[Math.floor(Math.random() * pool.length)];
    startSound(selection);
    showToast(`${choice.querySelector("strong").textContent} mode · ${selection.title}`);
  };
});

const pageHeader = document.querySelector(".topbar");
const scrollProgress = document.querySelector("#scrollProgress");
const backTop = document.querySelector("#backTop");
let scrollFrame = null;
function updateScrollUI() {
  const y = window.scrollY;
  const available = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.style.transform = `scaleX(${available > 0 ? y / available : 0})`;
  pageHeader.classList.toggle("scrolled", y > 80);
  backTop.classList.toggle("visible", y > window.innerHeight * 0.8);
  scrollFrame = null;
}
window.addEventListener("scroll", () => {
  if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScrollUI);
}, { passive: true });
updateScrollUI();
backTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

const observedSections = document.querySelectorAll("#explore, #library, #about");
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    mainNav.querySelectorAll("a").forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-35% 0px -55%", threshold: 0 });
observedSections.forEach((section) => navObserver.observe(section));

document.addEventListener("keydown", (event) => {
  const typing = ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName);
  if (typing || headphoneIntro?.isConnected) return;
  if (event.code === "Space" && player.classList.contains("visible")) {
    event.preventDefault();
    toggle();
  }
  if (event.key === "ArrowRight" && player.classList.contains("visible")) startSound(sounds[(current + 1) % sounds.length]);
  if (event.key === "ArrowLeft" && player.classList.contains("visible")) startSound(sounds[(current - 1 + sounds.length) % sounds.length]);
});
