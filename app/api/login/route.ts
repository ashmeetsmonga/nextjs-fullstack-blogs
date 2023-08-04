import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/app/libs/prisma";
import { createToken } from "@/app/utils/createToken";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user)
    return NextResponse.json({ message: "Email not found" }, { status: 404 });

  const isPasswordCorrect = bcrypt.compareSync(
    password,
    user.hashedPassword as string,
  );
  if (!isPasswordCorrect)
    return NextResponse.json({ message: "Invalid password" }, { status: 404 });

  const token = await createToken({ id: user.id, email: user.email! });

  const response = NextResponse.json(user);
  response.cookies.set("token", token);

  return response;
}
