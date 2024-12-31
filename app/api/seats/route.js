import { createConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const db = await createConnection();

    const url = new URL(request.url);
    const flight_id = parseInt(url.searchParams.get("flight_id"));

    let sql = "SELECT * FROM seats";
    if (flight_id) {
      sql += ` WHERE flight_id = ${flight_id}`;
    }

    const [seats] = await db.query(sql);
    return NextResponse.json(seats);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
