import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prisma";

export async function GET(req: NextRequest) {
  const userID = req.headers.get("userID");

  const user = await prisma.user.findUnique({ where: { id: userID! } });
  return NextResponse.json({
    name: user!.name,
    email: user!.email,
    id: userID,
  });
}
