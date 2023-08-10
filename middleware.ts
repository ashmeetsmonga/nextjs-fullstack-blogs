import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeToken } from "./app/utils/token";
import { TokenPayload } from "./types";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api/auth"))
    return authMiddleware(request);
  else {
    const token = request.cookies.get("token");
    if (!token) return NextResponse.redirect(new URL("/", request.url));
  }
}

async function authMiddleware(request: NextRequest) {
  const token = request.cookies.get("token");
  try {
    const payload: TokenPayload = await decodeToken(token?.value!);
    const response = NextResponse.next();
    response.headers.set("userID", payload.id);
    return response;
  } catch (e: any) {
    return NextResponse.json({ msg: "Invalid Token" }, { status: 400 });
  }
}

export const config = {
  matcher: ["/api/auth/:path*", "/create", "/profile/:path*"],
};
