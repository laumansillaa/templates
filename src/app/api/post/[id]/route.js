
import { NextResponse } from "next/server";

export async function GET (request, Response) {
  try {
    const id = request.url.split("post/")[1]
    const response = await fetch(`https://test.flexy.com.ar/api/post/byId?id=${id}`, {
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

//   export async function POST() {
//     const res = await fetch('https://data.mongodb-api.com/...', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'API-Key': process.env.DATA_API_KEY,
//       },
//       body: JSON.stringify({ time: new Date().toISOString() }),
//     })
//     const data = await res.json()
//     return Response.json(data)
//   }
