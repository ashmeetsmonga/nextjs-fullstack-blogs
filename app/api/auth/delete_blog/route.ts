import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prisma";

export async function DELETE(req: NextRequest) {
  const userID = req.headers.get("userID");
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  if (!id)
    return NextResponse.json(
      { msg: "Please provide blog id" },
      { status: 404 },
    );

  try {
    const blog = await prisma.blog.delete({ where: { id } });
    return NextResponse.json({
      msg: "Blog deleted successfully",
    });
  } catch (e: any) {
    return NextResponse.json(
      {
        msg: "Failed to delete blog",
      },
      { status: 400 },
    );
  }
}
