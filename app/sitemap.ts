// app/sitemap.ts
import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { getCanonicalUrl } from "@/lib/seo";

// نفس السلوغز اللي نستخدمها في صفحات الخدمات
const serviceSlugs = ["landing-pages", "ecommerce-stores", "management-systems"] as const;

// نفس السلوغز اللي نستخدمها في البورتفوليو
const projectSlugs = ["clinic-system", "landing-campaign", "store-launch"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // الصفحات الثابتة الأساسية (بدون locale)
  const staticPaths = ["/", "/services", "/pricing", "/portfolio", "/about", "/contact"];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    // الصفحات الثابتة
    for (const path of staticPaths) {
      entries.push({
        url: getCanonicalUrl(locale, path),
        lastModified: now,
        changeFrequency: "weekly",
        priority: path === "/" ? 1 : 0.8,
      });
    }

    // صفحات الخدمات (تفاصيل)
    for (const slug of serviceSlugs) {
      entries.push({
        url: getCanonicalUrl(locale, `/services/${slug}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.85,
      });
    }

    // صفحات البورتفوليو (تفاصيل)
    for (const slug of projectSlugs) {
      entries.push({
        url: getCanonicalUrl(locale, `/portfolio/${slug}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
