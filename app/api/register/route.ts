import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/app/libs/prisma";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, password } = body;

  if (!name || !email || !password)
    return NextResponse.json(
      { message: "Please provide name, email and password" },
      { status: 404 },
    );
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  try {
    const username = email.split("@")[0];
    const user = await prisma.user.create({
      data: { name, username, email, hashedPassword },
    });
    return NextResponse.json(user);
  } catch (e: any) {
    console.log(e);
    return NextResponse.json(
      { message: "Something went wrong while creating user in db" },
      { status: 404 },
    );
  }
}
