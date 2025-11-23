// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, type Locale } from "@/lib/i18n/config";

const PUBLIC_FILE = /\.(.*)$/;

// هذه هي الدالة التي يتوقعها Next.js
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // تجاهل API, _next, وملفات public
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // هل المسار يحتوي على لوكال بالفعل؟ (/ar or /en)
  const hasLocale = locales.some((locale: Locale) => {
    return pathname === `/${locale}` || pathname.startsWith(`/${locale}/`);
  });

  // إذا ما فيه لوكال، نعيد التوجيه للـ defaultLocale (ar)
  if (!hasLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${
      pathname === "/" ? "" : pathname
    }`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
