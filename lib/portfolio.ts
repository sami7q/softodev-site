// lib/portfolio.ts
import type { Locale } from "./i18n/config";

export type PortfolioSlug =
  | "clinic-management-system"
  | "ecommerce-fashion-store"
  | "saas-landing-page";

type PortfolioProject = {
  slug: PortfolioSlug;
  name_ar: string;
  name_en: string;
  short_ar: string;
  short_en: string;
  industry_ar: string;
  industry_en: string;
  country_ar: string;
  country_en: string;
  services_ar: string[];
  services_en: string[];
  tech: string[];
  result_ar: string;
  result_en: string;
  // ممكن توسع لاحقًا: liveUrl, images, etc.
};

const projects: PortfolioProject[] = [
  {
    slug: "clinic-management-system",
    name_ar: "نظام إدارة عيادة متكامل",
    name_en: "Full Clinic Management System",
    short_ar:
      "نظام متكامل لإدارة عيادة (مرضى، مواعيد، فواتير، مصاريف) يعمل أونلاين وأوفلاين.",
    short_en:
      "End-to-end clinic management system (patients, appointments, invoices, expenses) with online and offline-ready setup.",
    industry_ar: "الرعاية الصحية / العيادات",
    industry_en: "Healthcare / Clinics",
    country_ar: "العراق",
    country_en: "Iraq",
    services_ar: [
      "تحليل احتياج العيادة",
      "تصميم واجهات المستخدم",
      "تطوير النظام الخلفي والواجهات",
      "نظام ترخيص وحماية",
    ],
    services_en: [
      "Clinic requirements analysis",
      "UI/UX design",
      "Backend and frontend development",
      "Licensing and protection system",
    ],
    tech: ["Django", "HTMX", "TailwindCSS", "SQLite", "PyInstaller"],
    result_ar:
      "ساعد النظام العيادة على تنظيم الحجوزات والفواتير وتقليل الأخطاء اليدوية، مع تسريع العمل اليومي للفريق.",
    result_en:
      "The system helped the clinic organize appointments and invoices, reduce manual errors, and speed up daily operations for the staff.",
  },
  {
    slug: "ecommerce-fashion-store",
    name_ar: "متجر إلكتروني لعلامة أزياء",
    name_en: "Fashion Brand E-commerce Store",
    short_ar:
      "متجر إلكتروني مخصص لبيع منتجات أزياء مع صفحات منتجات سريعة وتجربة شراء سلسة.",
    short_en:
      "Custom e-commerce store for a fashion brand with fast product pages and a smooth checkout.",
    industry_ar: "التجارة الإلكترونية / الأزياء",
    industry_en: "E-commerce / Fashion",
    country_ar: "السعودية",
    country_en: "Saudi Arabia",
    services_ar: [
      "تصميم واجهة المتجر",
      "بناء صفحات المنتجات",
      "ربط بوابة الدفع",
      "تهيئة سيو للمنتجات",
    ],
    services_en: [
      "Storefront UI design",
      "Product page implementation",
      "Payment gateway integration",
      "On-page SEO for product pages",
    ],
    tech: ["Next.js", "React", "Stripe", "PostgreSQL"],
    result_ar:
      "ساهم المتجر في رفع المبيعات وتحسين تجربة العملاء، مع صفحات سريعة تناسب الزوار من الجوال.",
    result_en:
      "The store improved sales and customer experience with fast pages optimized for mobile visitors.",
  },
  {
    slug: "saas-landing-page",
    name_ar: "صفحة هبوط لخدمة SaaS",
    name_en: "SaaS Product Landing Page",
    short_ar:
      "صفحة هبوط تسويقية لخدمة برمجية مع تركيز على الرسالة الأساسية ودعوة واضحة للتجربة.",
    short_en:
      "Marketing landing page for a SaaS product with clear messaging and a strong trial CTA.",
    industry_ar: "البرمجيات / SaaS",
    industry_en: "Software / SaaS",
    country_ar: "الإمارات",
    country_en: "UAE",
    services_ar: [
      "كتابة المحتوى التسويقي",
      "تصميم صفحة الهبوط",
      "تحسين سرعة التحميل",
      "ربط أدوات التحليلات",
    ],
    services_en: [
      "Marketing copywriting",
      "Landing page design",
      "Performance optimization",
      "Analytics setup",
    ],
    tech: ["Next.js", "TypeScript", "Vercel"],
    result_ar:
      "رفعت صفحة الهبوط معدل التسجيل في التجربة المجانية بفضل تحسين الرسالة والهيكل.",
    result_en:
      "The landing page increased free trial signups thanks to optimized messaging and structure.",
  },
];

export function getProjectsForLocale(locale: Locale) {
  return projects.map((project) => ({
    slug: project.slug,
    name: locale === "ar" ? project.name_ar : project.name_en,
    short: locale === "ar" ? project.short_ar : project.short_en,
    industry: locale === "ar" ? project.industry_ar : project.industry_en,
    country: locale === "ar" ? project.country_ar : project.country_en,
  }));
}

export function getProjectBySlug(slug: string, locale: Locale) {
  const project = projects.find((p) => p.slug === slug);
  if (!project) return null;

  return {
    slug: project.slug,
    name: locale === "ar" ? project.name_ar : project.name_en,
    short: locale === "ar" ? project.short_ar : project.short_en,
    industry: locale === "ar" ? project.industry_ar : project.industry_en,
    country: locale === "ar" ? project.country_ar : project.country_en,
    services: locale === "ar" ? project.services_ar : project.services_en,
    tech: project.tech,
    result: locale === "ar" ? project.result_ar : project.result_en,
  };
}

export function getAllProjectSlugs(): PortfolioSlug[] {
  return projects.map((p) => p.slug);
}
