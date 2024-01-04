import { NextResponse } from "next/server";

export async function GET (request, Response) {
  try {

    const id = request.url.split("list/")[1]
    // const urlTest = `http://localhost:3001/api/theme/list/${id}`
    
    const urlProd = `https://test.flexy.com.ar/api/theme/list/${id}`

    const response = await fetch(urlProd, {
      method: "GET",
      headers: {
      },
    });

    const data = await response.json();
    return NextResponse.json(data, {status: 200});
    
  } catch (err) {
    console.log(err);
    return NextResponse.json({ data: err });
  } 
}
