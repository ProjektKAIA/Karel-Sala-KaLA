import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const { pathname, search } = request.nextUrl;

  // www -> non-www redirect
  if (hostname.startsWith("www.")) {
    return NextResponse.redirect(
      `https://kala-automobile.de${pathname}${search}`,
      301,
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
};
