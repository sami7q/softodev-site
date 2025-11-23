// lib/seo.ts
import type { Locale } from "./i18n/config";

// الأساس: نقرأ من البيئة، ولو مش موجود نطيح على الدومين الرسمي
const defaultBaseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.softodev.net";

/**
 * يرجع الـ base URL بدون / في النهاية
 * مثال: https://www.softodev.net
 */
export function getBaseUrl(): string {
  return defaultBaseUrl.replace(/\/+$/, "");
}

/**
 * متغيّر siteUrl قديم تستخدمه layout.tsx للـ metadataBase
 */
export const siteUrl = getBaseUrl();

/**
 * يبني canonical URL مثل:
 * https://www.softodev.net/ar/services/landing-pages
 */
export function getCanonicalUrl(locale: Locale, path: string): string {
  const base = getBaseUrl();

  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // نضيف /ar أو /en في البداية
  const localizedPath = `/${locale}${cleanPath === "/" ? "" : cleanPath}`;

  return `${base}${localizedPath}`;
}
