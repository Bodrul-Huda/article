import { SignJWT, jwtVerify } from "jose";

export async function CreateJWT(email, id) {
  const payload = { email: email, id: id };
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  let token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPIRATION_TIME)
    .sign(secret);
  return token;
}

export async function VerifyToken(token) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const decoded = await jwtVerify(token, secret);
  return decoded["payload"];
}
