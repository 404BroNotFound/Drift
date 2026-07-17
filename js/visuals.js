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

const pexelsVideo = (id) => `https://www.pexels.com/download/video/${id}/`;
const videoPlaylists = {
  ocean: ["../assets/videos/ocean.mp4", pexelsVideo(5560759), pexelsVideo(9691330), pexelsVideo(34962292), pexelsVideo(11049826)],
  rain: ["../assets/videos/rain-static.mp4", "../assets/videos/rain.mp4", pexelsVideo(34786652), pexelsVideo(37623808), pexelsVideo(34977395)],
  forest: ["../assets/videos/forest.mp4", pexelsVideo(35821946), pexelsVideo(30762707), pexelsVideo(36805605), pexelsVideo(15346324)],
  aurora: ["../assets/videos/aurora.mp4", pexelsVideo(11860943), pexelsVideo(5701989), pexelsVideo(28889010), pexelsVideo(5600930)],
  embers: ["../assets/videos/embers.mp4", pexelsVideo(10602611), pexelsVideo(3558454), pexelsVideo(4169071), pexelsVideo(7330175)],
  clouds: ["../assets/videos/clouds.mp4", pexelsVideo(5306292), pexelsVideo(5537270), pexelsVideo(5739824), pexelsVideo(2602910)],
};

let current = "ocean";
let playing = false;
let elapsed = 0;
let timer;
let fadeTimer;
let videoPlaylistIndex = 0;
let preloadedVideo;
let pendingVideoAdvance = false;
const visualAudio = new Audio();
visualAudio.loop = false;
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
  elapsed = 0;
  document.querySelector("#sessionTime").textContent = "00:00";
  resetVideoPlaylist(current, true);
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
  if (!visualAudio.src || visualAudio.ended) return startAudio();
  if (!visualAudio.paused) {
    visualAudio.pause();
    activeSceneVideo()?.pause();
    playing = false;
    clearInterval(timer);
    document.querySelector("#escape").classList.remove("playing");
    document.querySelector("#playVisual").textContent = "▶";
    document.querySelector("#trackState").textContent = "PAUSED";
  } else {
    visualAudio.play();
    activeSceneVideo()?.play().catch(() => {});
    playing = true;
    document.querySelector("#escape").classList.add("playing");
    document.querySelector("#playVisual").textContent = "⏸";
    document.querySelector("#trackState").textContent = "NOW DRIFTING";
    updateTimer();
  }
}

function activeSceneVideo() {
  return document.querySelector(`.scene[data-scene="${current}"] .scene-video`);
}

function setSceneVideoSource(video, source, autoplay = true) {
  const sourceElement = video.querySelector("source");
  if (sourceElement.getAttribute("src") !== source) {
    sourceElement.setAttribute("src", source);
    video.load();
  } else if (video.ended) {
    video.currentTime = 0;
  }
  video.loop = false;
  video.playbackRate = 1;
  if (autoplay) {
    video.play().catch(() => advanceSceneVideo());
    preloadNextSceneVideo();
  }
}

function resetVideoPlaylist(name, autoplay = false) {
  videoPlaylistIndex = 0;
  preloadedVideo = null;
  pendingVideoAdvance = false;
  const video = document.querySelector(`.scene[data-scene="${name}"] .scene-video`);
  if (video) setSceneVideoSource(video, videoPlaylists[name][0], autoplay);
}

function preloadNextSceneVideo() {
  const nextSource = videoPlaylists[current][videoPlaylistIndex + 1];
  if (!nextSource || preloadedVideo?.dataset.source === nextSource) return;
  preloadedVideo = document.createElement("video");
  preloadedVideo.preload = "auto";
  preloadedVideo.muted = true;
  preloadedVideo.playsInline = true;
  preloadedVideo.dataset.source = nextSource;
  preloadedVideo.dataset.scene = current;
  preloadedVideo.dataset.index = String(videoPlaylistIndex + 1);
  preloadedVideo.src = nextSource;
  const candidate = preloadedVideo;
  candidate.addEventListener("canplay", () => {
    if (preloadedVideo === candidate && pendingVideoAdvance) commitPreloadedVideo();
  }, { once: true });
  candidate.addEventListener("error", () => {
    if (preloadedVideo !== candidate || candidate.dataset.scene !== current) return;
    videoPlaylistIndex = Number(candidate.dataset.index);
    preloadedVideo = null;
    preloadNextSceneVideo();
  }, { once: true });
  candidate.load();
}

function commitPreloadedVideo() {
  if (!preloadedVideo || preloadedVideo.dataset.scene !== current) return false;
  if (preloadedVideo.readyState < HTMLMediaElement.HAVE_FUTURE_DATA) return false;
  const source = preloadedVideo.dataset.source;
  videoPlaylistIndex = Number(preloadedVideo.dataset.index);
  preloadedVideo = null;
  pendingVideoAdvance = false;
  setSceneVideoSource(activeSceneVideo(), source, true);
  document.querySelector("#trackState").textContent = "NOW DRIFTING";
  return true;
}

function advanceSceneVideo() {
  if (!playing) return;
  const playlist = videoPlaylists[current];
  if (videoPlaylistIndex >= playlist.length - 1) {
    document.querySelector("#trackState").textContent = "FINAL VISUAL · MUSIC CONTINUES";
    return;
  }
  if (commitPreloadedVideo()) return;
  pendingVideoAdvance = true;
  const video = activeSceneVideo();
  video.loop = true;
  video.currentTime = 0;
  video.play().catch(() => {});
  document.querySelector("#trackState").textContent = "PREPARING NEXT VISUAL";
  preloadNextSceneVideo();
}

function syncSceneVideos(name, restart = false) {
  document.querySelectorAll(".scene").forEach((scene) => {
    const video = scene.querySelector(".scene-video");
    if (!video) return;
    video.playbackRate = 1;
    if (scene.dataset.scene === name) {
      if (video.readyState === 0) video.load();
      if (restart || video.ended) video.currentTime = 0;
      video.play().catch(() => {});
    } else video.pause();
  });
}

function switchScene(name) {
  current = name;
  document.querySelectorAll(".scene").forEach((scene) =>
    scene.classList.toggle("active", scene.dataset.scene === name),
  );
  resetVideoPlaylist(name, true);
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
document.querySelectorAll(".scene-video").forEach((video) => {
  video.addEventListener("playing", () => {
    if (video === activeSceneVideo()) preloadNextSceneVideo();
  });
  video.addEventListener("ended", () => {
    if (video === activeSceneVideo()) advanceSceneVideo();
  });
  video.addEventListener("error", () => {
    if (video === activeSceneVideo() && playing) advanceSceneVideo();
  });
});
visualAudio.addEventListener("ended", () => {
  playing = false;
  pendingVideoAdvance = false;
  clearInterval(timer);
  activeSceneVideo()?.pause();
  document.querySelector("#escape").classList.remove("playing");
  document.querySelector("#playVisual").textContent = "▶";
  document.querySelector("#trackState").textContent = "SESSION COMPLETE";
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
