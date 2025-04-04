import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, work_experience } =
      await request.json();

    
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NEXT_EMAIL,  
        pass: process.env.NEXT_EMAIL_PASS,  
      },
    });
 
    const [info, recipient] = await Promise.all([
      transporter.sendMail({
        from: email,
        to: "nalderavillas@gmail.com",
        subject: `Inquiry from Nalderavillas`,
        text: "Inquiry from Nalderavillas",
        html: `<b>Firstname: ${firstName} <br> Email: ${email} <br> Phone: ${phone} <br> Message: ${work_experience}</b>`,
      }),
      transporter.sendMail({
        from: email,
        to: email,
        subject: `Nalderavillas`,
        text: "Nalderavillas",
        html: `<b>We will contact you soon</b> <br/> <b>Contact no: +91 95824 64822 <br> ${work_experience ? `Message: ${work_experience}` : `University name: ${work_experience}`}</b>`,
      }),
    ]);

    console.log("Message sent: %s", info.messageId);
    console.log("Message sent: %s", recipient.messageId);

    return NextResponse.json({
      status: 200,
      message: "Email sent successfully",
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
