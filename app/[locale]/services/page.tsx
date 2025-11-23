// app/[locale]/services/page.tsx
import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/seo";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import type { Locale } from "@/lib/i18n/config";
import { getServicesForLocale } from "@/lib/services";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "ar"
      ? "خدمات SoftoDev | صفحات هبوط، متاجر إلكترونية، وأنظمة إدارة"
      : "SoftoDev Services | Landing Pages, E-commerce & Management Systems";

  const description =
    locale === "ar"
      ? "استعرض خدمات SoftoDev: صفحات هبوط احترافية، متاجر إلكترونية متكاملة، وأنظمة إدارة مخصصة للشركات والعيادات."
      : "Explore SoftoDev services: conversion-focused landing pages, full e-commerce stores, and custom management systems.";

  const url = getCanonicalUrl(locale, "/services");

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isArabic = locale === "ar";
  const services = getServicesForLocale(locale);

  return (
    <section style={{ padding: "4rem 0" }}>
      <Container>
        <div style={{ maxWidth: 720, margin: "0 auto 2.5rem auto" }}>
          <p
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#6b7280",
              marginBottom: "0.75rem",
              textAlign: isArabic ? "right" : "left",
            }}
          >
            {isArabic ? "الخدمات" : "Services"}
          </p>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: 600,
              marginBottom: "0.75rem",
              textAlign: isArabic ? "right" : "left",
            }}
          >
            {isArabic
              ? "خدمات برمجية تغطي رحلة مشروعك من الفكرة إلى التشغيل"
              : "Software services that support your project from idea to launch"}
          </h1>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: "#4b5563",
              textAlign: isArabic ? "right" : "left",
            }}
          >
            {isArabic
              ? "اختر الخدمة المناسبة لمشروعك سواء كنت تحتاج صفحة هبوط لحملة إعلانية، متجرًا إلكترونيًا متكاملًا، أو نظام إدارة مخصص لشركتك أو عيادتك."
              : "Choose the service that matches your current stage: a landing page for your campaigns, a full e-commerce store, or a custom management system for your business or clinic."}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          {services.map((service) => (
            <div
              key={service.slug}
              style={{
                borderRadius: "1.25rem",
                border: "1px solid #e5e7eb",
                backgroundColor: "#ffffff",
                padding: "1.5rem",
                boxShadow: "0 18px 45px rgba(15, 23, 42, 0.04)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "190px",
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                    textAlign: isArabic ? "right" : "left",
                  }}
                >
                  {service.title}
                </h2>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    color: "#4b5563",
                    marginBottom: "0.75rem",
                    textAlign: isArabic ? "right" : "left",
                  }}
                >
                  {service.short}
                </p>
              </div>
              <div
                style={{
                  marginTop: "0.5rem",
                  textAlign: isArabic ? "right" : "left",
                }}
              >
                <Link
                  href={`/${locale}/services/${service.slug}`}
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#2563eb",
                    textDecoration: "none",
                  }}
                >
                  {isArabic ? "عرض تفاصيل الخدمة →" : "View service details →"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
