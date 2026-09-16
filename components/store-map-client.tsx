"use client";

import dynamic from "next/dynamic";
import type { Store } from "@/config/stores";

const StoreMap = dynamic(
  () => import("@/components/store-map-leaflet").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[320px] w-full items-center justify-center rounded-xl border border-border bg-muted">
        <span className="text-muted-foreground">Завантаження карти…</span>
      </div>
    ),
  }
);

export default function StoreMapClient({ store }: { store: Store }) {
  return <StoreMap store={store} />;
}
