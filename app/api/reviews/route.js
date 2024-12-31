import { createConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const db = await createConnection();

    let sql = `SELECT 
        reviews.*,
        CONCAT(users.first_name, ' ', users.last_name) AS user_name,
        users.img as img,
        cities.name AS city_name,
        countries.name AS country_name
      FROM reviews
      LEFT JOIN users ON reviews.user_id = users.id
      LEFT JOIN cities ON reviews.city_id = cities.id
      LEFT JOIN countries ON cities.country_id = countries.id`;

    const [reviews] = await db.query(sql);
    return NextResponse.json(reviews);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
