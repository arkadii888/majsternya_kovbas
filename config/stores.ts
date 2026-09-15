import data from "./stores.json";
import coords from "./stores.coords.json";

export type Store = {
  id: string;
  name: string;
  city: string;
  address: string;
  phone?: string;
  hours?: string;
  map: string;
  link?: string;
  lat: number;
  lng: number;
};

export type MapBounds = {
  center: [number, number];
  zoom: number;
};

const coordinates = coords as Record<string, { lat: number; lng: number } | undefined>;

export const ukraineBounds: MapBounds = {
  center: [data.bounds.center[0], data.bounds.center[1]],
  zoom: data.bounds.zoom,
};

export const stores: Store[] = data.stores.flatMap((store) => {
  const point = coordinates[store.id];
  if (!point) return [];
  return [{ ...store, lat: point.lat, lng: point.lng }];
});
