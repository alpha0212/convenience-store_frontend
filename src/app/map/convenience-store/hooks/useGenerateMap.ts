import { useEffect, useRef, useState } from "react";

export function useGenerateMap(mapRef: React.RefObject<HTMLDivElement>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [map, setMap] = useState<any | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`;
    script.async = true;
    script.onload = () => {
      if (window.naver && mapRef.current) {
        const mapInstance = new window.naver.maps.Map(mapRef.current, {
          center: new window.naver.maps.LatLng(37.5665, 126.978),
          zoom: 15,
        });
        setMap(mapInstance);
      }
    };
    document.head.appendChild(script);
  }, [mapRef]);

  // 지도 이동될 때마다 편의점 검색
  useEffect(() => {
    if (!map) return;

    const listener = window.naver.maps.Event.addListener(
      map,
      "idle",
      async () => {
        const center = map.getCenter();
        const res = await fetch(
          `/api/convenience-store?query=CU&lat=${center.y}&lng=${center.x}`,
        );
        const data = await res.json();
        console.log("편의점 데이터:", data);
        // 기존 마커 제거
        markersRef.current.forEach((m) => m.setMap(null));
        markersRef.current = [];

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.places?.forEach((place: any) => {
          const marker = new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(place.y, place.x),
            map,
            title: place.name,
          });
          markersRef.current.push(marker);
        });
      },
    );

    return () => window.naver.maps.Event.removeListener(listener);
  }, [map]);
}
