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
        subject: `Thank You for Your Interest in Vvie Villas, Naldehra Golf Hills.`,
        text: "Thank You for Your Interest in Vvie Villas, Naldehra Golf Hills.",
        html: `
          <p>Dear Sir/Ma’am</p> 
          <p>Thank you for reaching out to us and expressing interest in our ultra-luxury development Vvie Villas at Naldehra Golf Hills. We’re thrilled to connect with you!
Our team at Infranium will reach out shortly with more details. In the meantime, feel free to contact us at +91-8471002002 or sales@infranium.in for any immediate queries.</p>
          <p>Your dream home in the hills awaits!</p>
          <br/>
          <p>Best Regards,<br/>Team Infranium<br/>+91-8471002002</p>
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
