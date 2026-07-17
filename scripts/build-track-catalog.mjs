import { mkdir, readFile, writeFile } from "node:fs/promises";

const TARGET = 1000;
const PAGE_SIZE = 100;
const INCLUDE = /ambient|relax|meditat|calm|peace|soft|dream|sleep|piano|acoustic|guitar|jazz|folk|world|nature|spiritual|beautiful/i;
const EXCLUDE = /aggressive|energetic|epic|horror|scary|hard rock|metal|punk|trailer|tension|suspense|corporate|upbeat|sport|\brap\b|hip[ -]?hop|boom bap|\bbeats?\b|trap|\bhouse\b|edm|dubstep|dance|club|funk|christmas|xmas|holiday|children|kids|motivational|advertising/i;
const tracks = [];
const seen = new Set();

const NAME_PREFIXES = [
  "Quiet", "Moonlit", "Gentle", "Still", "Soft", "Distant", "Silver", "Hidden",
  "Tender", "Peaceful", "Velvet", "Morning", "Evening", "Calm", "Floating", "Warm",
  "Silent", "Dreaming", "Amber", "Autumn", "Winter", "Open", "Restful", "Slow", "Inner",
];
const NAME_SUFFIXES = [
  "Horizon", "Garden", "Tides", "Meadow", "Reflections", "Lanterns", "Shore", "Clouds",
  "River", "Sanctuary", "Dawn", "Twilight", "Rain", "Breeze", "Valley", "Path",
  "Harbor", "Dreams", "Echoes", "Light", "Forest", "Stillness", "Waves", "Bloom",
  "Sky", "Solitude", "Journey", "Whispers", "Haven", "Moments", "Drift", "Serenity",
  "Waters", "Glow", "Mist", "Lullaby", "Canvas", "Embers", "Space", "Reverie",
];

function professionalName(index) {
  const shuffled = (index * 37) % (NAME_PREFIXES.length * NAME_SUFFIXES.length);
  return `${NAME_PREFIXES[shuffled % NAME_PREFIXES.length]} ${NAME_SUFFIXES[Math.floor(shuffled / NAME_PREFIXES.length)]}`;
}

function cleanTitle(rawTitle, artist, genre) {
  let title = String(rawTitle || "Untitled")
    .replace(/\(\s*(?:more|listen|visit|available)[^)]*\)/gi, "")
    .replace(/https?:\/\/\S+/gi, "")
    .replace(/[_|]+/g, " ")
    .replace(/\b(?:royalty[ -]?free|no copyright) music\b/gi, "")
    .replace(/\b(?:instrumental )?background music for (?:video|vlog|stories|meditation and yoga).*$/gi, "")
    .replace(/\bbackground (?:music|track|audio)\b/gi, "")
    .replace(/\bfor (?:video|vlog|youtube|podcast)\b.*$/gi, "")
    .replace(/\b(?:short|medium|long|full) version\b/gi, "")
    .replace(/\b\d+\s*(?:sec(?:ond)?s?|mins?|minutes?)\b/gi, "")
    .replace(/\b(?:short|medium)\s*\d*\b/gi, "")
    .replace(/\b(?:mid|outro)\s*\d*\b/gi, "")
    .replace(/\bbackground\b/gi, "")
    .replace(/\bmusic\b/gi, "")
    .replace(/\bfor documentaries\b/gi, "")
    .replace(/\binspiring\s+inspirational\b/gi, "Inspirational")
    .replace(/\brelaxing\s+relax\b/gi, "Relaxing")
    .replace(/^[\s\-–—:.]+/g, "")
    .replace(/\s*[-–—:.]+\s*$/g, "")
    .replace(/\s+/g, " ")
    .trim();

  title = title
    .replace(/^background music\s*/i, "")
    .replace(/^music\s*[-–—:]?\s*/i, "")
    .replace(/^calm soft$/i, "Soft Calm")
    .trim();

  if (!title || /^(ambient|relaxing|meditation|piano|soft) music$/i.test(title)) {
    title = `${genre || "Ambient"} by ${artist || "Independent Artist"}`;
  }
  return title;
}

function cleanArtist(rawArtist) {
  return String(rawArtist || "Independent Artist")
    .replace(/_+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function cleanExistingCatalog() {
  const outputUrl = new URL("../assets/data/tracks.json", import.meta.url);
  const existing = JSON.parse(await readFile(outputUrl, "utf8"));
  const usedTitles = new Set();
  for (const track of existing) {
    track.artist = cleanArtist(track.artist);
    const base = cleanTitle(track.title, track.artist, track.genre);
    let candidate = base;
    let variation = 1;
    while (usedTitles.has(candidate.toLocaleLowerCase())) {
      candidate = `${base} — ${track.artist}${variation > 1 ? ` ${variation}` : ""}`;
      variation++;
    }
    usedTitles.add(candidate.toLocaleLowerCase());
    track.title = candidate;
  }
  await writeFile(outputUrl, `${JSON.stringify(existing, null, 2)}\n`, "utf8");
  console.log(`Cleaned ${existing.length} catalog titles.`);
}

async function renameExistingCatalog() {
  const outputUrl = new URL("../assets/data/tracks.json", import.meta.url);
  const existing = JSON.parse(await readFile(outputUrl, "utf8"));
  existing.forEach((track, index) => {
    track.title = professionalName(index);
  });
  await writeFile(outputUrl, `${JSON.stringify(existing, null, 2)}\n`, "utf8");
  console.log(`Renamed ${existing.length} catalog tracks.`);
}

if (process.argv.includes("--clean-existing")) {
  await cleanExistingCatalog();
  process.exit(0);
}
if (process.argv.includes("--rename-existing")) {
  await renameExistingCatalog();
  process.exit(0);
}

for (let offset = 0; tracks.length < TARGET && offset < 20000; offset += PAGE_SIZE) {
  const endpoint = new URL("https://datasets-server.huggingface.co/rows");
  endpoint.searchParams.set("dataset", "Tefa0228/songs");
  endpoint.searchParams.set("config", "default");
  endpoint.searchParams.set("split", "train");
  endpoint.searchParams.set("offset", String(offset));
  endpoint.searchParams.set("length", String(PAGE_SIZE));

  let page;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      page = await fetch(endpoint, { signal: AbortSignal.timeout(20000) }).then(
        (response) => response.json(),
      );
      break;
    } catch {
      if (attempt === 2) throw new Error(`Catalog request failed at offset ${offset}`);
    }
  }

  for (const wrapper of page.rows || []) {
    const row = wrapper.row;
    const searchable = `${row.Titulo} ${row.Genero} ${row.Tags}`;
    const url = row["Link Descarga"];
    if (!url || seen.has(url) || !INCLUDE.test(searchable) || EXCLUDE.test(searchable)) continue;
    seen.add(url);
    let tags = [];
    try {
      tags = JSON.parse(row.Tags || "[]");
    } catch {}
    tracks.push({
      title: professionalName(tracks.length),
      originalTitle: cleanTitle(row.Titulo, row.Autor, row.Genero),
      artist: cleanArtist(row.Autor),
      genre: String(row.Genero || "Ambient").trim(),
      mood: tags.slice(0, 3).join(" · ") || "Calm instrumental",
      url,
      source: row.Link,
      license: "Pixabay Content License",
    });
    if (tracks.length === TARGET) break;
  }
  if (offset % 1000 === 0) console.log(`Collected ${tracks.length}/${TARGET} tracks...`);
  if (!page.rows?.length) break;
}

if (tracks.length !== TARGET) throw new Error(`Only found ${tracks.length} tracks.`);

const usedTitles = new Set();
for (const track of tracks) {
  const base = track.title;
  let candidate = base;
  let variation = 1;
  while (usedTitles.has(candidate.toLocaleLowerCase())) {
    candidate = `${base} — ${track.artist}${variation > 1 ? ` ${variation}` : ""}`;
    variation++;
  }
  usedTitles.add(candidate.toLocaleLowerCase());
  track.title = candidate;
}

await mkdir(new URL("../assets/data/", import.meta.url), { recursive: true });
await writeFile(
  new URL("../assets/data/tracks.json", import.meta.url),
  `${JSON.stringify(tracks, null, 2)}\n`,
  "utf8",
);
console.log(`Wrote ${tracks.length} unique playable tracks.`);
