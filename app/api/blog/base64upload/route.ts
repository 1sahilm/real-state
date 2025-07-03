// /api/blog/base64upload/route.ts

import { NextRequest, NextResponse } from "next/server";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storage } from "@/app/_firebase/config";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { base64String, fileName } = body;

    if (!base64String || !fileName) {
      return NextResponse.json({ success: false, message: "Missing base64 or fileName" });
    }

    const fileRef = ref(storage, `images/editor/${Date.now()}-${fileName}`);
    const snapshot = await uploadString(fileRef, base64String, "data_url");
    const downloadURL = await getDownloadURL(snapshot.ref);

    return NextResponse.json({ success: true, fileURL: downloadURL });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Upload failed",
        error: {
          message: error?.message,
          stack: error?.stack,
        },
      },
      { status: 500 }
    );
  }
}
