import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prisma";

export async function POST(req: NextRequest) {
  const userID = req.headers.get("userID");
  const { bio } = await req.json();
  if (!bio)
    return NextResponse.json({ msg: "Please provide bio" }, { status: 404 });

  try {
    const user = await prisma.user.update({
      where: { id: userID! },
      data: { bio },
    });
    return NextResponse.json({
      msg: "Bio updated successfully",
    });
  } catch (e: any) {
    return NextResponse.json(
      {
        msg: "Failed to update bio",
      },
      { status: 400 },
    );
  }
}
