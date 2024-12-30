import { compare } from "bcrypt";
import { createConnection } from "@/lib/db";

export async function POST(req) {
  try {
    const { emailOrPhone, password } = await req.json();

    const db = await createConnection();

    const [users] = await db.execute(
      "SELECT * FROM users WHERE (email = ? OR phone_number = ?)",
      [emailOrPhone, emailOrPhone]
    );

    if (users.length === 0) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), {
        status: 401,
      });
    }

    const user = users[0];

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), {
        status: 401,
      });
    }

    return new Response(
      JSON.stringify({
        id: user.id,
        email: user.email,
        name: `${user.first_name} ${user.last_name}`,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
