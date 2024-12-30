import { hash } from "bcrypt";
import { createConnection } from "@/lib/db";

export async function POST(req) {
  try {
    const { emailOrPhone, password } = await req.json();

    console.log("Received data:", { emailOrPhone, password });

    if (!emailOrPhone || !password) {
      return new Response(
        JSON.stringify({ message: "Email/Phone and password are required" }),
        { status: 400 }
      );
    }

    const db = await createConnection();
    const hashedPassword = await hash(password, 10);
    await db.query("INSERT INTO users (email, password) VALUES (?, ?)", [
      emailOrPhone,
      hashedPassword,
    ]);

    return new Response(
      JSON.stringify({ message: "User created successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during sign-up:", error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500 }
    );
  }
}