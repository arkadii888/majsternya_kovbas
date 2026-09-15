import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const storesPath = path.join(root, "config/stores.json");

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
  if (typeof store.map !== "string" || !store.map.trim()) return 0;
  const map = store.map.trim();
  let host;
  try {
    host = new URL(map).host;
  } catch {
    return 0;
  }
  if (host !== "maps.app.goo.gl") return 0;

  const finalUrl = await resolveUrl(map);
  const coords = coordsFromUrl(finalUrl);
  if (!coords) {
    console.warn(`  ! could not extract coordinates from resolved URL: ${finalUrl}`);
    return 0;
  }
  const [lat, lng] = coords;
  if (store.lat === lat && store.lng === lng) return 0;
  store.lat = lat;
  store.lng = lng;
  console.log(`  ${store.id} -> ${lat}, ${lng}`);
  return 1;
}

const data = JSON.parse(await fs.readFile(storesPath, "utf8"));
let resolvedCount = 0;
for (const store of data.stores ?? []) {
  resolvedCount += await resolveStore(store);
}
const json = JSON.stringify(data, null, 2) + "\n";
await fs.writeFile(storesPath, json, "utf8");
console.log(resolvedCount === 0 ? "stores links up to date" : `resolved ${resolvedCount} store link(s)`);
