import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST() {
  return NextResponse.json(
    {
      error:
        "La cotizacion por correo ya no esta disponible. Usa /cotizar para abrir WhatsApp con tu solicitud precargada.",
    },
    { status: 410 },
  );
}
