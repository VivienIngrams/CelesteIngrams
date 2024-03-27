import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Handles POST requests to /api

export async function POST(request) {
  const user = process.env.NODEMAILER_USER;
  const pass = process.env.NODEMAILER_PASS;

  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    console.log(name, email,);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      tls: { rejectUnauthorized: false },
      auth: {
        user: "ingramsceleste@gmail.com",
        pass: "pbtkhddkhyozhdzu",
      },
    });

    const mail = await transporter.sendMail({
      from: email,
      to: "vivingrams@gmail.com",
      subject: `Update your mailing list!`,
      html: `
        <p>This person would like to be added to your mailing list: </p>
        <p>Name: ${name} </p>
        <p>Email: ${email} </p>
       
      `,
    });

    return NextResponse.json({ message: "Success: you have been added to Celeste's mailing list." });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
