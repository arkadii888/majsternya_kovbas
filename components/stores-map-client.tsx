"use client";

import dynamic from "next/dynamic";

const StoresMap = dynamic(() => import("@/components/stores-map-leaflet"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[500px] w-full items-center justify-center rounded-xl border border-border bg-muted">
      <span className="text-muted-foreground">Завантаження карти…</span>
    </div>
  ),
});

export default StoresMap;
