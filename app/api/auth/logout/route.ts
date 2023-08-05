import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  cookies().delete("token");
  return NextResponse.json({ msg: "Logout Successful" });
}
