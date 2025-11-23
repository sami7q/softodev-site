// lib/services.ts
import type { Locale } from "./i18n/config";

export type ServiceSlug =
  | "landing-pages"
  | "ecommerce-stores"
  | "management-systems";

type ServiceContent = {
  slug: ServiceSlug;
  title_ar: string;
  title_en: string;
  short_ar: string;
  short_en: string;
  body_ar: string;
  body_en: string;
};

const services: ServiceContent[] = [
  {
    slug: "landing-pages",
    title_ar: "صفحات هبوط احترافية",
    title_en: "Conversion-Focused Landing Pages",
    short_ar:
      "صفحات تسويقية سريعة ومصممة لزيادة التحويلات لحملة معينة أو منتج واحد.",
    short_en:
      "Fast, modern landing pages designed to convert traffic from your ads and campaigns.",
    body_ar:
      "نصمّم ونطوّر صفحات هبوط مركّزة على هدف واحد واضح: تحويل الزائر إلى عميل. نراعي سرعة التحميل، الرسالة التسويقية، وترتيب العناصر بحيث تناسب إعلاناتك ومنتجك وسوق الخليج والعراق.",
    body_en:
      "We design and build landing pages focused on a single clear goal: turning visitors into customers. We optimize load speed, messaging hierarchy, and layout to align with your ads, offers, and the GCC & Iraq market.",
  },
  {
    slug: "ecommerce-stores",
    title_ar: "متاجر إلكترونية متكاملة",
    title_en: "Full E-commerce Stores",
    short_ar:
      "متاجر مهيّأة للدفع الإلكتروني، سريعة ومتوافقة مع محركات البحث وسوق الخليج.",
    short_en:
      "SEO-ready, high-performing online stores tailored for the GCC market.",
    body_ar:
      "نبني متاجر إلكترونية احترافية تدعم وسائل الدفع الإلكتروني، إدارة المنتجات، وتتبع الطلبات. نركز على سهولة الاستخدام لعملائك، وسرعة الموقع، وتجربة شراء سلسة من أول زيارة حتى الدفع.",
    body_en:
      "We build professional online stores that support online payments, product management, and order tracking. We focus on usability, performance, and a smooth checkout experience from first visit to payment.",
  },
  {
    slug: "management-systems",
    title_ar: "أنظمة إدارة مخصصة",
    title_en: "Custom Management Systems",
    short_ar:
      "أنظمة إدارة للشركات والعيادات مبنية خصيصًا لاحتياجك، مع واجهة سهلة الاستخدام.",
    short_en:
      "Tailor-made management systems for businesses and clinics with user-friendly interfaces.",
    body_ar:
      "إذا كان لديك فريق أو عيادة أو شركة وتريد نظامًا داخليًا يسهّل العمل اليومي، نبني لك نظام إدارة مخصص: مرضى، مواعيد، فواتير، موظفين، مخزون، أو أي بيانات مهمة لعملك.",
    body_en:
      "If you have a team, clinic, or company and need an internal system to streamline daily work, we build custom management systems: patients, appointments, invoices, staff, inventory, or any key data your business needs.",
  },
];

export function getServicesForLocale(locale: Locale) {
  return services.map((service) => ({
    slug: service.slug,
    title: locale === "ar" ? service.title_ar : service.title_en,
    short: locale === "ar" ? service.short_ar : service.short_en,
  }));
}

export function getServiceBySlug(slug: string, locale: Locale) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;

  return {
    slug: service.slug,
    title: locale === "ar" ? service.title_ar : service.title_en,
    intro: locale === "ar" ? service.short_ar : service.short_en,
    body: locale === "ar" ? service.body_ar : service.body_en,
  };
}

export function getAllServiceSlugs(): ServiceSlug[] {
  return services.map((s) => s.slug);
}
