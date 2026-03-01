import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { hostname, protocol, pathname, search } = request.nextUrl;

  // www -> non-www redirect
  if (hostname === "www.kala-automobile.de") {
    return NextResponse.redirect(
      `https://kala-automobile.de${pathname}${search}`,
      301,
    );
  }

  // HTTP -> HTTPS redirect (fuer Nicht-Vercel-Hosting)
  if (protocol === "http:") {
    return NextResponse.redirect(
      `https://${hostname}${pathname}${search}`,
      301,
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
};
