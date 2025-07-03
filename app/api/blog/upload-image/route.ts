import { NextRequest, NextResponse } from "next/server";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storage } from "@/app/_firebase/config";

export async function POST(request: NextRequest) {
  try {
    let base64String = "";
    let fileName = "";

    const contentType = request.headers.get("content-type");

    if (contentType?.includes("application/json")) {
      const body = await request.json();
      base64String = body.base64String;
      fileName = body.fileName;
    } else if (contentType?.includes("multipart/form-data")) {
      const formData = await request.formData();
      const file = formData.get("image") as File;

      if (!file) {
        return NextResponse.json({ success: false, message: "No image file provided" });
      }

      const reader = new FileReader();

      base64String = await new Promise<string>((resolve, reject) => {
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      fileName = file.name;
    } else {
      return NextResponse.json({ success: false, message: "Unsupported content type" }, { status: 400 });
    }

    if (!base64String || !fileName) {
      return NextResponse.json({ success: false, message: "Missing base64 or fileName" });
    }

    const fileRef = ref(storage, `images/editor/${Date.now()}-${fileName}`);
    const snapshot = await uploadString(fileRef, base64String, "data_url");
    const downloadURL = await getDownloadURL(snapshot.ref);

    return NextResponse.json({ success: true, fileURL: downloadURL });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: "Upload failed",
      error: error?.message || "Unknown error",
    }, { status: 500 });
  }
}


