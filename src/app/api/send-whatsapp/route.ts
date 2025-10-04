// route.ts
import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const fromNumber = "whatsapp:+14155238886"; // sandbox number
const client = twilio(accountSid, authToken);

export async function POST(req: NextRequest) {
  try {
    const { to, name, number, email } = await req.json();

    const message = await client.messages.create({
      from: fromNumber,
      to: `whatsapp:${to}`,
      body: `New Lead!\nName: ${name}\nNumber: ${number}\nEmail: ${email}`,
    });

    return NextResponse.json({ success: true, sid: message.sid });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
