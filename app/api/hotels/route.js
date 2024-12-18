import { hotels } from "@/lib/dummy_data";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const hotel = hotels.find((hotel) => hotel.id === parseInt(id, 10));

    if (!hotel) {
      return new Response(JSON.stringify({ error: "Hotel not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(hotel), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(hotels), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
