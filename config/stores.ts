import data from "./stores.json";
import coords from "./stores.coords.json";

export type CityOption = {
  id: string;
  label: string;
};

export type FeatureOption = {
  id: string;
  label: string;
};

export type Store = {
  id: string;
  name: string;
  city: string;
  address: string;
  phone?: string;
  hours?: string;
  map: string;
  link?: string;
  features: string[];
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

export const cities: CityOption[] = data.cities.map((city) => ({
  id: city.id,
  label: city.label,
}));

export const features: FeatureOption[] = data.features.map((feature) => ({
  id: feature.id,
  label: feature.label,
}));

export const stores: Store[] = data.stores.flatMap((store) => {
  const point = coordinates[store.id];
  if (!point) return [];
  return [{ ...store, lat: point.lat, lng: point.lng }];
});
