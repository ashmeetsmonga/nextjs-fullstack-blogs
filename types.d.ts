import { Blog } from "@prisma/client";
import { NextRequest } from "next/server";

export interface AuthNextRequest extends NextRequest {
  user: { id: string };
}

interface TokenPayload {
  id: string;
  email: string;
  exp: number;
  iat: number;
  sub: string;
}

interface ProfileData {
  name: string;
  email: string;
}

interface BlogWithUser extends Blog {
  user: { name: string | null; createdAt: Date };
}
