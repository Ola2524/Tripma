import { users } from "@/lib/dummy_data";

export async function POST(request) {
  if (
    users.find(
      (user) =>
        user.email === request.email && user.password === request.password
    )
  ) {
    return new Response("You logged in successfully", {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(JSON.stringify({ error: "Invalid credintial" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
}
