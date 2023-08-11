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
  id: string;
  name: string;
  email: string;
}

interface Blog {
  id: string;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  category: string;
}

interface BlogWithUser extends Blog {
  user: { name: string | null; createdAt: Date };
}
