// app/sitemap.ts
import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { locales, type Locale } from "@/lib/i18n/config";
import { getAllServiceSlugs } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/pricing", "/contact", "/portfolio", "/about"];

  const serviceSlugs = getAllServiceSlugs();

  const entries: MetadataRoute.Sitemap = [];

  const now = new Date();

  function add(path: string, locale: Locale) {
    entries.push({
      url: new URL(`/${locale}${path}`, siteUrl).toString(),
      lastModified: now,
      changeFrequency: "weekly",
      priority: path === "" ? 1 : 0.7,
    });
  }

  for (const locale of locales) {
    for (const route of routes) {
      add(route || "/", locale);
    }
    for (const slug of serviceSlugs) {
      add(`/services/${slug}`, locale);
    }
  }

  return entries;
}
