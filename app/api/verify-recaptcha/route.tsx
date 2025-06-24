import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const token = body.token;

  if (!token) {
    return NextResponse.json({ success: false, error: "Token missing" }, { status: 400 });
  }

  const secretKey = process.env.NEXT_SCERET_KEY;
  const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  const googleRes = await fetch(verifyURL, { method: "POST" });
  const data = await googleRes.json();

  if (data.success) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false, error: data["error-codes"] }, { status: 400 });
  }
}
