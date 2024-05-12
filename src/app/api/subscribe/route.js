import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    let reqBody = await req.json();
    const prisma = new PrismaClient({
      log: ["query", "info", "warn", "error"],
    });
    const result = await prisma.subscribers.create({
      data: reqBody,
    });
    return NextResponse.json({ status: "Success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "Failed", data: e });
  }
}