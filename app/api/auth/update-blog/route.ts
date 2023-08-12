import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prisma";

export async function POST(req: NextRequest) {
  try {
    const userID = req.headers.get("userID");

    const { title, category, body, id } = await req.json();

    const blog = await prisma.blog.update({
      where: { id },
      data: { title, category, body, userId: userID! },
    });
    return NextResponse.json(
      { msg: "Blog updated successfully" },
      { status: 200 },
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json({ msg: "Something went wrong" }, { status: 400 });
  }
}
