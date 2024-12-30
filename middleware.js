// export { default } from "next-auth/middleware";

// export const config = { matcher: ["/app/:path*", "/:path*"] };

import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(request) {
    const pathname = request.nextUrl.pathname;
    const isAuth = await getToken({ req: request });
    const protectedPages = ["/user"];
    const isAuthRoute = pathname.startsWith("/");
    const isProtectedPages = protectedPages.some((route) =>
      pathname.startsWith(route)
    );
    if (!isAuth && isProtectedPages) {
      const redirectUrl = new URL("/", request.url);
      redirectUrl.searchParams.set("showSignupForm", "true");
      return NextResponse.redirect(redirectUrl);
    }
  },
  {
    callbacks: {
      async authorized() {
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/user/:path*"],
};
