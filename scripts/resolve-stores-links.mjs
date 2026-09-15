import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const storesPath = path.join(root, "config/stores.json");
const coordsPath = path.join(root, "config/stores.coords.json");

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36";

function coordsFromUrl(url) {
  // !3d / !4d are the place pin coords (most precise)
  const d = url.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/);
  if (d) return [Number(d[1]), Number(d[2])];
  // /place/@lat,lng,zzz
  const at = url.match(/@(-?\d{1,2}\.\d+),(-?\d{1,3}\.\d+)(?:[\d.]*z)?/);
  if (at) return [Number(at[1]), Number(at[2])];
  // ?q=lat,lng
  const pair = url.match(/q=(-?\d{1,2}\.\d+),(-?\d{1,3}\.\d+)/);
  if (pair) return [Number(pair[1]), Number(pair[2])];
  return null;
}

async function resolveUrl(url, maxHops = 8) {
  let current = url;
  for (let i = 0; i < maxHops; i += 1) {
    const res = await fetch(current, {
      method: "GET",
      redirect: "manual",
      headers: { "user-agent": USER_AGENT },
    });
    const location = res.headers.get("location") ?? res.headers.get("Location");
    res.body?.cancel().catch(() => {});
    if (!location) return current;
    current = new URL(location, current).toString();
  }
  return current;
}

async function resolveStore(store) {
  if (typeof store.map !== "string" || !store.map.trim()) return null;
  const map = store.map.trim();
  let host;
  try {
    host = new URL(map).host;
  } catch {
    return null;
  }
  if (host !== "maps.app.goo.gl") return null;

  const finalUrl = await resolveUrl(map);
  const coords = coordsFromUrl(finalUrl);
  if (!coords) {
    console.warn(`  ! could not extract coordinates from resolved URL: ${finalUrl}`);
    return null;
  }
  const [lat, lng] = coords;
  console.log(`  ${store.id} -> ${lat}, ${lng}`);
  return { lat, lng };
}

const data = JSON.parse(await fs.readFile(storesPath, "utf8"));

const resolved = {};
for (const store of data.stores ?? []) {
  let point = null;
  try {
    point = await resolveStore(store);
  } catch (err) {
    console.warn(`  ! failed to resolve ${store.id} (${err instanceof Error ? err.message : err})`);
  }
  if (point) resolved[store.id] = point;
}

const existing = JSON.parse(await fs.readFile(coordsPath, "utf8").catch(() => "{}"));
const merged = { ...existing, ...resolved };
for (const id of Object.keys(merged)) {
  if (!(data.stores ?? []).some((store) => store.id === id)) delete merged[id];
}

await fs.writeFile(coordsPath, JSON.stringify(merged, null, 2) + "\n", "utf8");
console.log(`${Object.keys(merged).length} store coordinate(s) in stores.coords.json`);
