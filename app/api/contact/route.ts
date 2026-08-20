import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    keySet: !!process.env.RESEND_API_KEY,
    keyPrefix: process.env.RESEND_API_KEY?.substring(0, 8) || "NOT SET",
  })
}

export async function POST(request: Request) {
  try {
    const { name, company, email, phone, service, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      )
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Tagg Website <noreply@firstdibbs.ai>",
        to: ["Info@taggconstruction.co.uk"],
        reply_to: email,
        subject: `New Enquiry from ${name}${company ? ` - ${company}` : ""}`,
        html: `
          <h2>New Website Enquiry</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold; width: 140px;">Name</td>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Company</td>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">${company || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Email</td>
              <td style="padding: 8px 12px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Service</td>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">${service || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold; vertical-align: top;">Message</td>
              <td style="padding: 8px 12px; border: 1px solid #ddd; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        `,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      console.log("[v0] Resend API error:", JSON.stringify(data))
      return NextResponse.json(
        { error: data.message || "Failed to send email." },
        { status: 500 }
      )
    }

    console.log("[v0] Email sent successfully:", data.id)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.log("[v0] Catch error:", err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Something went wrong." },
      { status: 500 }
    )
  }
}
