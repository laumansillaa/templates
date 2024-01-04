// http://localhost:3001/api/theme/search

import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    const location = request.nextUrl.searchParams.get("location");

    const urlTest = `http://localhost:3001/api/theme/search?id=${id}&location=${location}`;

    // const urlProd = `https://test.flexy.com.ar/api/theme/list/${id}`

    const response = await fetch(urlTest, {
      method: "GET",
      headers: {},
    });

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ data: err });
  }
}
