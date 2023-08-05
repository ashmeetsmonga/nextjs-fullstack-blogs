import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prisma";

export async function POST(req: NextRequest) {
  try {
    const userID = req.headers.get("userID");

    const { title, body } = await req.json();

    const blog = await prisma.blog.create({
      data: { title, body, userId: userID! },
    });
    return NextResponse.json(
      { msg: "Blog created successfully" },
      { status: 200 },
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json({ msg: "Something went wrong" }, { status: 400 });
  }
}
