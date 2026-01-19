import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, company, service, message } = body;

        // Server-side validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Nodemailer Transporter
        // NOTE: In production, use environment variables for credentials
        const transporter = nodemailer.createTransport({
            service: "gmail", // Or SMTP host
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
//sample
        try {
            await transporter.verify();
        } catch (verifyError) {
            console.error("Nodemailer verify failed:", verifyError);
            // In development, might not have env vars set, but let's proceed to simulate success or fail
            // return NextResponse.json({ error: "Email service unavailable" }, { status: 500 });
        }

        // Email Content
        const mailOptions = {
            from: "noreply@synture.tech",
            to: "sagar.yadav@synturetech.com", // Receiving email
            subject: `New Enquiry from ${name} - ${service}`,
            html: `
        <h2>New Contact Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
        };

        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            await transporter.sendMail(mailOptions);
        } else {
            console.log("Mock Email Sent:", mailOptions);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
