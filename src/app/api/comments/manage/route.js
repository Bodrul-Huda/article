import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient({
      log: ["query", "info", "warn", "error"],
    });
    const headerList = headers();
    let id = parseInt(headerList.get("id"));

    const result = await prisma.comments.findMany({
      where: { userID: id },

      include: { news_list: { select: { title: true } } },
    });

    return NextResponse.json({ status: "Success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "Failed", data: e });
  }
}

export async function POST(req, res) {
  try {
    const prisma = new PrismaClient({
      log: ["query", "info", "warn", "error"],
    });
    const headerList = headers();
    let id = parseInt(headerList.get("id"));
    let reqBody = await req.json();
    reqBody.userID = id;

    const result = await prisma.comments.create({ data: reqBody });

    return NextResponse.json({ status: "Success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "Failed", data: e });
  }
}

export async function DELETE(req, res) {
  try {
    const prisma = new PrismaClient({
      log: ["query", "info", "warn", "error"],
    });
    const headerList = headers();
    const id = parseInt(headerList.get("id"));
    let reqBody = await req.json();
    const comment_id = parseInt(reqBody["id"]);

    const result = await prisma.comments.deleteMany({
      where: {
        AND: [{ userID: id }, { id: comment_id }],
      },
    });

    return NextResponse.json({ status: "Success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "Failed", data: e });
  }
}
