import { useEffect } from "react";

export function useGenerateMap(mapRef: React.RefObject<HTMLDivElement>) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`;
    // script.src = 'https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=ferz6tjlan'
    script.async = true;
    script.onload = () => {
      if (window.naver && mapRef.current) {
        new window.naver.maps.Map(mapRef.current, {
          center: new window.naver.maps.LatLng(37.5665, 126.978),
          zoom: 15,
        });
      }
    };
    document.head.appendChild(script);
  }, []);
}
