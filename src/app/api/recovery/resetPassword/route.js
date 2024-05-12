import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  try {
    const prisma = new PrismaClient({
      log: ["query", "info", "warn", "error"],
    });
    const reqBody = await req.json();
    const count = await prisma.users.count({
      where: { email: reqBody["email"], otp: reqBody["otp"] },
    });
    if (count === 1) {
      let result = await prisma.users.update({
        where: { email: reqBody["email"] },
        data: { otp: "0", password: reqBody["password"] },
      });

      return NextResponse.json({
        status: "Success",
        data: "Password updated successfully",
      });
    } else {
      return NextResponse.json({
        status: "fail",
        data: "Password updatd failed",
      });
    }
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
