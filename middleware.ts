import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  if (token?.value) {
    try {
      const payload: any = await jwtVerify(
        token.value,
        new TextEncoder().encode(process.env.JWT_SECRET),
      );
      const response = NextResponse.next();
      response.headers.set("userID", payload.payload.id);
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
