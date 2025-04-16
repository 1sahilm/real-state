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
        to: "sales@infranium.in",
        subject: `Inquiry from Nalderavillas`,
        text: "Inquiry from Nalderavillas",
        html: `<b>Firstname: ${firstName} <br> Email: ${email} <br> Phone: ${phone} <br> Message: ${work_experience}</b>`,
      }),
      transporter.sendMail({
        from: email,
        to: email,
        subject: `Nalderavillas`,
        text: "Nalderavillas",
        html: `
          <p>Dear Sir/Ma’am</p>
          <p>Greetings from Infranium.</p>
          <p>Thank you for your interest in Vvie Villas.</p>
          <p>We at Infranium Homes appreciate your inquiry. A member of our team will be in touch with you shortly to assist further.</p>
          <p>Warm regards,<br/>Team Infranium</p>
          <br/>
          <p>Regards<br/>Team Infranium<br/>Contact No. 91 8471002002</p>
        `,
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
