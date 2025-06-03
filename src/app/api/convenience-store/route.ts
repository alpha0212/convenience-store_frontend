export async function GET(req: Request) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { searchParams } = new URL(req.url);
  // const query = searchParams.get("query") ?? "CU";
  // const lng = searchParams.get('lng');
  // const lat = searchParams.get('lat');

  const res = await fetch(
    // `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${query}`,
    'https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=분당구 불정로 6',
    {
      headers: {
        "x-ncp-apigw-api-key-id":
          process.env.NEXT_PUBLIC_NAVER_SEARCH_PLACE_ID!,
        "x-ncp-apigw-api-key": process.env.NEXT_PUBLIC_NAVER_SEARCH_SECRET!,
        Accept: "application/json",
      },
      cache: "no-store",
    },
  );

  const data = await res.json();
  return Response.json(data);
}
