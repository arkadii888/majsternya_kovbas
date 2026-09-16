"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { stores, ukraineBounds } from "@/config/stores";
import StoreCard from "@/components/store-card";

const pinIcon = L.divIcon({
  className: "store-pin",
  html: `<div style="width:28px;height:28px;background:#e85d2a;border:3px solid #fff;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 2px 6px rgba(0,0,0,.4);"></div>`,
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  popupAnchor: [0, -28],
});

export default function StoresMap() {
  return (
    <div className="relative z-0 isolate">
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
            <Popup key={store.id} className="store-card-popup">
              <StoreCard store={store} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
