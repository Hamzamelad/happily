import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  const id = Number(url.searchParams.get("id"));
  let type = url.searchParams.get("type") as string;

  if (id) {
    const record = await db.task.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json({ record });
  } else {
    const data = await db.task.findMany({
      where: {
        type,
      },
    });
    console.log(type);
    return NextResponse.json({ data });
  }
}
