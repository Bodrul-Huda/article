import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(req.url);
    let type = searchParams.get("type");

    const result = await prisma.news_list.findMany({
      where: { type: type },
      select: {
        id: true,
        title: true,
        short_des: true,
        img1: true,
        img2: true,
        img3: true,
        img4: true,
      },
    });

    return NextResponse.json({ status: "Success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "Failed", data: e });
  }
}
