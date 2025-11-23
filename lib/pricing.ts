// lib/pricing.ts
import type { Locale } from "./i18n/config";

type PlanId = "starter" | "growth" | "pro";

type PricingPlan = {
  id: PlanId;
  name_ar: string;
  name_en: string;
  priceLabel_ar: string;
  priceLabel_en: string;
  description_ar: string;
  description_en: string;
  features_ar: string[];
  features_en: string[];
  highlight: boolean;
};

const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name_ar: "خطة البداية",
    name_en: "Starter",
    priceLabel_ar: "ابتداءً من 199$",
    priceLabel_en: "From $199",
    description_ar: "مناسبة لصفحة هبوط واحدة أو مشروع بسيط يحتاج حضور أونلاين سريع.",
    description_en:
      "Ideal for a single landing page or a simple project that needs a quick online presence.",
    features_ar: [
      "صفحة واحدة (صفحة هبوط أو تعريفية)",
      "تصميم متجاوب للموبايل والتابلت",
      "ربط واتساب + نموذج تواصل بسيط",
      "تحسينات أساسية لمحركات البحث",
    ],
    features_en: [
      "Single page (landing or simple website)",
      "Fully responsive design",
      "WhatsApp button + simple contact form",
      "Basic on-page SEO setup",
    ],
    highlight: false,
  },
  {
    id: "growth",
    name_ar: "خطة النمو",
    name_en: "Growth",
    priceLabel_ar: "ابتداءً من 499$",
    priceLabel_en: "From $499",
    description_ar: "مناسبة لشركات تحتاج موقع كامل أو متجر إلكتروني جاهز للتسويق.",
    description_en:
      "Perfect for businesses needing a full website or ready-to-market e-commerce store.",
    features_ar: [
      "حتى 5 صفحات (الرئيسية + الخدمات + عنا + تواصل + أخرى)",
      "إمكانية إضافة مدونة لاحقًا",
      "متجر بسيط أو قائمة خدمات / منتجات",
      "تهيئة أفضل لمحركات البحث",
      "تكامل مع أدوات تحليلات أساسية",
    ],
    features_en: [
      "Up to 5 pages (home, services, about, contact, etc.)",
      "Blog-ready structure for future content",
      "Simple store or service/product listing",
      "Stronger SEO foundations",
      "Basic analytics integration",
    ],
    highlight: true,
  },
  {
    id: "pro",
    name_ar: "خطة الشركات المتقدمة",
    name_en: "Pro",
    priceLabel_ar: "ابتداءً من 7500$",
    priceLabel_en: "From $7500",
    description_ar:
      "مناسبة للأنظمة المخصصة، المتاجر الكبيرة، أو المشاريع التي تحتاج تكاملات خاصة.",
    description_en:
      "For custom systems, larger stores, or projects requiring special integrations.",
    features_ar: [
      "نظام إدارة مخصص (عيادات، شركات، متاجر كبيرة، ...)",
      "لوحات تحكم وتقارير مخصصة",
      "تكامل مع أنظمة خارجية (بوابة دفع، SMS، ...)",
      "دعم تقني موسّع خلال فترة التنفيذ",
    ],
    features_en: [
      "Custom management system (clinics, companies, large stores, etc.)",
      "Custom dashboards and reporting",
      "Integration with external systems (payment, SMS, etc.)",
      "Extended technical support during implementation",
    ],
    highlight: false,
  },
];

export function getPricingForLocale(locale: Locale) {
  return pricingPlans.map((plan) => ({
    id: plan.id,
    name: locale === "ar" ? plan.name_ar : plan.name_en,
    priceLabel: locale === "ar" ? plan.priceLabel_ar : plan.priceLabel_en,
    description: locale === "ar" ? plan.description_ar : plan.description_en,
    features: locale === "ar" ? plan.features_ar : plan.features_en,
    highlight: plan.highlight,
  }));
}
