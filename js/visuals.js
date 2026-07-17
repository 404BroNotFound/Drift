const scenes = {
  ocean: {
    heading: "Moonlit<br><em>tides.</em>",
    label: "01 · NIGHT OCEAN",
    desc: "Slow waves beneath an open night sky.",
    track: {
      title: "Theta Ocean",
      artist: "a2m",
      url: "https://archive.org/download/a2m-dusk-relaxation_201706/2-a2m-theta-ocean.mp3",
    },
  },
  rain: {
    heading: "Rainy<br><em>window.</em>",
    label: "02 · SHELTERED RAIN",
    desc: "A warm room while the weather moves outside.",
    track: {
      title: "Belief in Yourself Meditation",
      artist: "Ashot Danielyan",
      url: "https://archive.org/download/jamendo-524183/01-2034075-Ashot_Danielyan_Composer-Belief%20In%20Yourself%20Meditation.mp3",
    },
  },
  forest: {
    heading: "Forest<br><em>dawn.</em>",
    label: "03 · MORNING FOREST",
    desc: "First light moving through a quiet canopy.",
    track: {
      title: "Drift to Sleep",
      artist: "Adam Lullaby",
      url: "https://archive.org/download/jamendo-638715/01-2327038-Adam%20Lullaby-Baby%20Sharks%20Drift%20to%20Sleep.mp3",
    },
  },
  aurora: {
    heading: "Aurora<br><em>night.</em>",
    label: "04 · NORTHERN SKY",
    desc: "Color and stillness above distant mountains.",
    track: {
      title: "Deep Blue Ocean",
      artist: "Konstantin Pazuzu Studio",
      url: "https://archive.org/download/jamendo-638462/01-2326430-KonstantinPazuzuStudio-Deep%20Blue%20Ocean.mp3",
    },
  },
  embers: {
    heading: "Quiet<br><em>embers.</em>",
    label: "05 · FIRESIDE",
    desc: "A small fire holding back the night.",
    track: {
      title: "Drift to Sleep",
      artist: "Adam Lullaby",
      url: "https://archive.org/download/jamendo-638715/01-2327038-Adam%20Lullaby-Baby%20Sharks%20Drift%20to%20Sleep.mp3",
    },
  },
  clouds: {
    heading: "Above<br><em>clouds.</em>",
    label: "06 · OPEN AIR",
    desc: "A slow horizon with nowhere else to be.",
    track: {
      title: "Belief in Yourself Meditation",
      artist: "Ashot Danielyan",
      url: "https://archive.org/download/jamendo-524183/01-2034075-Ashot_Danielyan_Composer-Belief%20In%20Yourself%20Meditation.mp3",
    },
  },
};

let current = "ocean";
let playing = false;
let elapsed = 0;
let timer;
let fadeTimer;
const visualAudio = new Audio();
visualAudio.loop = true;
visualAudio.preload = "metadata";

document.querySelector("#visualWave").innerHTML = Array.from(
  { length: 70 },
  () => `<i style="--h:${5 + Math.random() * 20}px;--d:-${Math.random()}s"></i>`,
).join("");

function updateTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    elapsed++;
    document.querySelector("#sessionTime").textContent =
      `${String((elapsed / 60) | 0).padStart(2, "0")}:${String(elapsed % 60).padStart(2, "0")}`;
  }, 1000);
}

function startAudio() {
  const track = scenes[current].track;
  const targetVolume = +document.querySelector("#visualVolume").value * 0.3;
  visualAudio.pause();
  visualAudio.src = track.url;
  visualAudio.volume = 0;
  visualAudio.play().catch(() => {
    playing = false;
    document.querySelector("#escape").classList.remove("playing");
    document.querySelector("#playVisual").textContent = "▶";
    document.querySelector("#trackState").textContent = "UNABLE TO PLAY";
  });
  playing = true;
  document.querySelector("#escape").classList.add("playing");
  document.querySelector("#playVisual").textContent = "⏸";
  document.querySelector("#trackState").textContent = "NOW DRIFTING";
  clearInterval(fadeTimer);
  let fadeStep = 0;
  fadeTimer = setInterval(() => {
    fadeStep++;
    visualAudio.volume = targetVolume * (fadeStep / 20);
    if (fadeStep >= 20) clearInterval(fadeTimer);
  }, 100);
  updateTimer();
}

function toggleAudio() {
  if (!visualAudio.src) return startAudio();
  if (!visualAudio.paused) {
    visualAudio.pause();
    playing = false;
    clearInterval(timer);
    document.querySelector("#escape").classList.remove("playing");
    document.querySelector("#playVisual").textContent = "▶";
    document.querySelector("#trackState").textContent = "PAUSED";
  } else {
    visualAudio.play();
    playing = true;
    document.querySelector("#escape").classList.add("playing");
    document.querySelector("#playVisual").textContent = "⏸";
    document.querySelector("#trackState").textContent = "NOW DRIFTING";
    updateTimer();
  }
}

function syncSceneVideos(name, restart = false) {
  document.querySelectorAll(".scene").forEach((scene) => {
    const video = scene.querySelector(".scene-video");
    if (!video) return;
    video.playbackRate = 0.72;
    if (scene.dataset.scene === name) {
      if (video.readyState === 0) video.load();
      if (restart) video.currentTime = 0;
      video.play().catch(() => {});
    } else video.pause();
  });
}

function switchScene(name) {
  current = name;
  document.querySelectorAll(".scene").forEach((scene) =>
    scene.classList.toggle("active", scene.dataset.scene === name),
  );
  syncSceneVideos(name);
  document.querySelectorAll(".scene-option").forEach((button) =>
    button.classList.toggle("active", button.dataset.target === name),
  );
  const scene = scenes[name];
  document.querySelector("#sceneTitle").innerHTML = scene.heading;
  document.querySelector("#sceneNumber").textContent = scene.label;
  document.querySelector("#sceneDescription").textContent = scene.desc;
  document.querySelector("#trackName").textContent =
    `${scene.track.title} · ${scene.track.artist}`;
  if (playing) startAudio();
}

document.querySelectorAll(".scene-option").forEach((button) => {
  button.onclick = () => switchScene(button.dataset.target);
});
document.querySelector("#playVisual").onclick = toggleAudio;
document.querySelector("#visualVolume").oninput = (event) => {
  clearInterval(fadeTimer);
  visualAudio.volume = +event.target.value * 0.3;
};
document.querySelector("#fullscreen").onclick = () =>
  document.fullscreenElement
    ? document.exitFullscreen()
    : document.querySelector("#escape").requestFullscreen?.();

document.querySelector("#trackName").textContent =
  `${scenes[current].track.title} · ${scenes[current].track.artist}`;
syncSceneVideos(current);
document.addEventListener("visibilitychange", () =>
  document.hidden
    ? document.querySelectorAll(".scene-video").forEach((video) => video.pause())
    : syncSceneVideos(current),
);
