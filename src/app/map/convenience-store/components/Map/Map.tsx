"use client";

import { useRef } from "react";
import { useGenerateMap } from "../../hooks/useGenerateMap";

export function Map() {
  const generateMapRef = useRef<HTMLDivElement>(null);

  useGenerateMap(generateMapRef);

  return <div className="w-full h-full" ref={generateMapRef}></div>;
}
