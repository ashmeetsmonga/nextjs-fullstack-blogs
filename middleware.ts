import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeToken } from "./app/utils/token";
import { TokenPayload } from "./types";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  if (token?.value) {
    try {
      const payload: TokenPayload = await decodeToken(token.value);
      const response = NextResponse.next();
      response.headers.set("userID", payload.id);
      return response;
    } catch (e: any) {
      return NextResponse.json({ msg: "Invalid Token" }, { status: 400 });
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/api/:path*"],
};
