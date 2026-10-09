import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export function proxy(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  // login kora na thakle sign in page e pathao
  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/product/:path*"],
};