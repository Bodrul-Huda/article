import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient({
      log: ["query", "info", "warn", "error"],
    });
    const { searchParams } = new URL(req.url);
    let postID = parseInt(searchParams.get("postID"));

    const result = await prisma.comments.findMany({
      where: { postID: postID },
      include: { users: { select: { firstName: true, lastName: true } } },
      orderBy: {
        id: "desc",
        // updatedAt: { sort: "desc" },
      },
    });

    return NextResponse.json({ status: "Success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "Failed", data: e });
  }
}
