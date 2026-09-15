import data from "./stores.json";

export type Store = {
  id: string;
  name: string;
  city: string;
  address: string;
  phone?: string;
  hours?: string;
  map: string;
  lat: number;
  lng: number;
};

export type MapBounds = {
  center: [number, number];
  zoom: number;
};

function coordsFromMapLink(map: string): [number, number] | null {
  const d = map.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/);
  if (d) return [Number(d[1]), Number(d[2])];
  const at = map.match(/@(-?\d{1,2}\.\d+),(-?\d{1,3}\.\d+)/);
  if (at) return [Number(at[1]), Number(at[2])];
  const q = map.match(/[?&]q=(-?\d{1,2}\.\d+),(-?\d{1,3}\.\d+)/);
  if (q) return [Number(q[1]), Number(q[2])];
  return null;
}

export const ukraineBounds: MapBounds = {
  center: [data.bounds.center[0], data.bounds.center[1]],
  zoom: data.bounds.zoom,
};

export const stores: Store[] = data.stores
  .map((store) => {
    if (typeof store.lat === "number" && typeof store.lng === "number") {
      return { ...store, lat: store.lat, lng: store.lng };
    }
    const [lat, lng] = coordsFromMapLink(store.map) ?? [NaN, NaN];
    return { ...store, lat, lng };
  })
  .filter((store) => Number.isFinite(store.lat) && Number.isFinite(store.lng));
