// lib/seo.ts
import type { Locale } from "./i18n/config";

export const siteUrl = "https://softodev.com"; // غيّرها للدومين النهائي

export function getLocalePath(locale: Locale, path: string) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${cleanPath === "/" ? "" : cleanPath}`;
}

export function getCanonicalUrl(locale: Locale, path: string) {
  const url = new URL(getLocalePath(locale, path), siteUrl);
  return url.toString();
}

export function getLocalizedTitle(locale: Locale, base: string) {
  if (locale === "ar") return base;
  return base;
}

export function getLocalizedDesc(locale: Locale, baseAr: string, baseEn: string) {
  return locale === "ar" ? baseAr : baseEn;
}
