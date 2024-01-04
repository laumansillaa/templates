// http://localhost:3001/api/theme/search

import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const urlTest = `http://localhost:3001/api/propertyTypes`;

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
