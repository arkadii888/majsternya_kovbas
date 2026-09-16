import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const storesPath = path.join(root, "config/stores.json");

const data = JSON.parse(await fs.readFile(storesPath, "utf8"));
const stores = data.stores ?? [];

let changed = 0;
for (const store of stores) {
  const expected = `/stores/${store.id}`;
  if (store.link !== expected) {
    store.link = expected;
    changed += 1;
  }
}

if (changed > 0) {
  await fs.writeFile(storesPath, JSON.stringify(data, null, 2) + "\n", "utf8");
  console.log(`Updated ${changed} store link(s) in stores.json`);
} else {
  console.log("All store links already point to /stores/{id}");
}
