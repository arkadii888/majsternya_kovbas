"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { stores, ukraineBounds, type Store } from "@/config/stores";

const pinIcon = L.divIcon({
  className: "store-pin",
  html: `<div style="width:28px;height:28px;background:#e85d2a;border:3px solid #fff;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 2px 6px rgba(0,0,0,.4);"></div>`,
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  popupAnchor: [0, -28],
});

function StorePopup({ store }: { store: Store }) {
  return (
    <div className="flex flex-col gap-1 text-sm">
      <p className="text-base font-semibold">{store.name}</p>
      <p>
        {store.city}, {store.address}
      </p>
      {store.phone && <p>Тел.: {store.phone}</p>}
      {store.hours && <p>Графік: {store.hours}</p>}
      <a
        href={store.map}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 font-medium text-sky-600 hover:underline dark:text-sky-400"
      >
        Відкрити на мапі →
      </a>
    </div>
  );
}

export default function StoresMap() {
  return (
    <MapContainer
      center={ukraineBounds.center}
      zoom={ukraineBounds.zoom}
      className="h-[500px] w-full rounded-xl border border-border"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stores.map((store) => (
        <Marker key={store.id} position={[store.lat, store.lng]} icon={pinIcon}>
          <Popup>
            <StorePopup store={store} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
