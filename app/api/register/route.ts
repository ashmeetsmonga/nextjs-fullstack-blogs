import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/app/libs/prisma";
import { createToken } from "@/app/utils/token";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, password } = body;

  if (!name || !email || !password)
    return NextResponse.json(
      { message: "Please provide name, email and password" },
      { status: 400 },
    );

  const user = await prisma.user.findUnique({ where: { email } });
  if (user)
    return NextResponse.json(
      { message: "Email already exists" },
      { status: 400 },
    );

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  try {
    const username = email.split("@")[0];
    const user = await prisma.user.create({
      data: { name, username, email, hashedPassword, bio: "Your bio..." },
    });
    const response = NextResponse.json({
      name: user.name,
      email: user.email,
      id: user.id,
    });

    const token = await createToken({ id: user.id, email: user.email! });
    response.cookies.set("token", token);

    return response;
  } catch (e: any) {
    return NextResponse.json(
      { message: "Something went wrong while creating user in db" },
      { status: 400 },
    );
  }
}
