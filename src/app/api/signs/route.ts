import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(
  req: NextRequest,
  { params }: { params: { aspect: string } },
) {
  const data = await db.sign.findMany({ where: { aspect: "achivement" } });
  return NextResponse.json({ data });
}
