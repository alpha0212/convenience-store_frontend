"use client";

import { useRef } from "react";
import { useGenerateMap } from "./hooks/useGenerateMap";

export default function ConvenienceStorePage() {
  const mapRef = useRef<HTMLDivElement>(null);

  useGenerateMap(mapRef);

  return <div className="w-full h-full" ref={mapRef}></div>;
}
