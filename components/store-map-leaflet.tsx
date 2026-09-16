"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Store } from "@/config/stores";

const pinIcon = L.divIcon({
  className: "store-pin",
  html: `<div style="width:28px;height:28px;background:#e85d2a;border:3px solid #fff;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 2px 6px rgba(0,0,0,.4);"></div>`,
  iconSize: [28, 28],
  iconAnchor: [14, 28],
});

export default function StoreMap({ store }: { store: Store }) {
  const position: [number, number] = [store.lat, store.lng];
  return (
    <div className="relative z-0 isolate">
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        className="h-[320px] w-full rounded-xl border border-border"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={pinIcon} />
      </MapContainer>
    </div>
  );
}
