import { NextRequest } from "next/server";

export interface AuthNextRequest extends NextRequest {
  user: { id: string };
}
