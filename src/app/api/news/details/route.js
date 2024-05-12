import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient({
      log: ["query", "info", "warn", "error"],
    });
    const { searchParams } = new URL(req.url);
    let id = parseInt(searchParams.get("id"));

    const result = await prisma.news_list.findMany({
      where: { id: id },
      include: { categories: true },
    });

    return NextResponse.json({ status: "Success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "Failed", data: e });
  }
}
