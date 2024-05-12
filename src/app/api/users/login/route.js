import { CreateJWT } from "@/app/utility/JWTTokenhelper";
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
    let result = await prisma.users.findUnique({ where: reqBody });

    if (result === 0) {
      return NextResponse.json({ status: "Failed", data: result });
    } else {
      const token = await CreateJWT(result["email"], result["id"]);
      let cookieDuration = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const cookieString = `token=${token}; expires=${cookieDuration.toUTCString()}; path=/`;
      return NextResponse.json(
        { status: "Success", data: token },
        { status: 200, headers: { "set-cookie": cookieString } }
      );
    }
  } catch (e) {
    return NextResponse.json({ status: "Failed", data: e });
  }
}

export async function GET(req, res) {
  let expireDuration = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const response = NextResponse.redirect(new URL("/", req.url), 303);
  response.cookies.set("token", "", { expires: expireDuration });
  return response;
  // return NextResponse.json({ status: "Success", data: "Success" });
}
