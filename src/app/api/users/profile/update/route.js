import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    let reqBody = await req.json();
    const headerList = headers();
    let id = parseInt(headerList.get("id"));

    const result = await prisma.users.update({
      where: { id: id },
      data: reqBody,
    });

    return NextResponse.json({ status: "Success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "failed", data: e });
  }
}
