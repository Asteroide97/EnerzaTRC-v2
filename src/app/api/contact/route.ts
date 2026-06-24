import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validators/contact";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildInternalEmailText(payload: ReturnType<typeof contactSchema.parse>, sourceUrl: string) {
  return [
    "Nueva solicitud desde enerzatrc.com.mx",
    "",
    `Nombre: ${payload.name}`,
    `Teléfono: ${payload.phone}`,
    `Correo: ${payload.email}`,
    `Ciudad: ${payload.city}`,
    `Estado: ${payload.state}`,
    `Tipo de cliente: ${payload.customerType}`,
    `Recibo CFE aproximado: ${payload.averageBill || "No compartido"}`,
    `Servicio solicitado: ${payload.service}`,
    `Mensaje: ${payload.message || "No compartido"}`,
    `URL de origen: ${sourceUrl}`,
  ].join("\n");
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFrom = process.env.RESEND_FROM;
  const contactTo = process.env.CONTACT_TO;

  if (!resendApiKey || !resendFrom || !contactTo) {
    return NextResponse.json(
      {
        error:
          "La configuración de correo no está completa. Revisa RESEND_API_KEY, RESEND_FROM y CONTACT_TO.",
      },
      { status: 500 },
    );
  }

  let json: unknown;

  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: parsed.error.issues[0]?.message || "Datos inválidos.",
      },
      { status: 400 },
    );
  }

  const payload = parsed.data;

  if (payload.company) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const headersList = await headers();
  const sourceUrl = payload.sourceUrl || headersList.get("referer") || "No disponible";
  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: resendFrom,
      to: contactTo,
      replyTo: payload.email,
      subject: `Nueva solicitud de ${payload.name} | Enerza TRC`,
      text: buildInternalEmailText(payload, sourceUrl),
      html: `
        <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
          <h1 style="font-size: 20px;">Nueva solicitud desde enerzatrc.com.mx</h1>
          <p><strong>Nombre:</strong> ${escapeHtml(payload.name)}</p>
          <p><strong>Teléfono:</strong> ${escapeHtml(payload.phone)}</p>
          <p><strong>Correo:</strong> ${escapeHtml(payload.email)}</p>
          <p><strong>Ciudad:</strong> ${escapeHtml(payload.city)}</p>
          <p><strong>Estado:</strong> ${escapeHtml(payload.state)}</p>
          <p><strong>Tipo de cliente:</strong> ${escapeHtml(payload.customerType)}</p>
          <p><strong>Recibo CFE aproximado:</strong> ${escapeHtml(payload.averageBill || "No compartido")}</p>
          <p><strong>Servicio solicitado:</strong> ${escapeHtml(payload.service)}</p>
          <p><strong>Mensaje:</strong><br />${escapeHtml(payload.message || "No compartido").replace(/\n/g, "<br />")}</p>
          <p><strong>URL de origen:</strong> ${escapeHtml(sourceUrl)}</p>
        </div>
      `,
    });

    await resend.emails.send({
      from: resendFrom,
      to: payload.email,
      subject: "Recibimos tu solicitud | Enerza TRC",
      text: [
        "Gracias por contactar a Enerza TRC.",
        "Recibimos tu información y revisaremos tu caso para orientarte sobre la solución solar adecuada.",
        "Para una cotización más precisa, ten a la mano tu recibo CFE más reciente.",
      ].join(" "),
      html: `
        <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
          <h1 style="font-size: 20px;">Recibimos tu solicitud</h1>
          <p>Gracias por contactar a Enerza TRC.</p>
          <p>
            Recibimos tu información y revisaremos tu caso para orientarte sobre la
            solución solar adecuada.
          </p>
          <p>
            Para una cotización más precisa, ten a la mano tu recibo CFE más reciente.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "No fue posible enviar la solicitud.",
      },
      { status: 500 },
    );
  }
}
