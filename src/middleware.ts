import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.[^/]+$/;

const legacyRedirects: Record<string, string> = {
  "/Blog": "/blog",
  "/Nosotros": "/nosotros",
  "/Servicios": "/servicios",
  "/Privacidad": "/privacidad",
  "/Beneficios": "/beneficios",
  "/ComoFunciona": "/como-funciona",
  "/comofunciona": "/como-funciona",
  "/PanelDeControl": "/panel-de-control",
  "/paneldecontrol": "/panel-de-control",
  "/PreguntasFrecuentes": "/preguntas-frecuentes",
  "/preguntasfrecuentes": "/preguntas-frecuentes",
};

function shouldBypass(pathname: string) {
  return (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    PUBLIC_FILE.test(pathname)
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (shouldBypass(pathname)) {
    return NextResponse.next();
  }

  const legacyTarget = legacyRedirects[pathname];

  if (legacyTarget && legacyTarget !== pathname) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = legacyTarget;
    return NextResponse.redirect(redirectUrl, 308);
  }

  const lowercasedPathname = pathname.toLowerCase();

  if (pathname === lowercasedPathname) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = lowercasedPathname;

  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: "/:path*",
};
