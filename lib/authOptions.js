import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn, signOut } from "next-auth/react";

export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        emailOrPhone: { type: "text", placeholder: "Email or phone number" },
        password: { type: "password", placeholder: "Password" },
      },
      async authorize(credentials, req) {
        // const user = {
        //   id: 1,
        //   email: "user1@gmail.com",
        //   password: "123",
        //   phone_number: "123",
        // };
        // if (
        //   credentials?.emailOrPhone == user.email ||
        //   (credentials?.emailOrPhone == user.phone_number &&
        //     credentials?.password == user.password)
        // ) {
        // }
        try {
          const res = await fetch(
            `${process.env.NEXTAUTH_URL}/api/auth/signin`,
            {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" },
            }
          );
          const user = await res.json();

          // If no error and we have user data, return it
          if (res.ok && user) {
            return user;
          }
        } catch (error) {
          // Return null if user data could not be retrieved
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/',
    signOut: '/',
  }
};
