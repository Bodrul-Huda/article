import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    const count = await prisma.users.count({ where: reqBody });
    if (count === 1) {
      return NextResponse.json({ status: "Success", data: "Valid OTP code" });
    } else {
      return NextResponse.json({ status: "fail", data: "Invalid OTP code" });
    }
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
