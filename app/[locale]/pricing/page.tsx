// app/[locale]/pricing/page.tsx
import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import type { Locale } from "@/lib/i18n/config";
import { getPricingForLocale } from "@/lib/pricing";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "ar"
      ? "أسعار تطوير المواقع والمتاجر | SoftoDev"
      : "Website & Store Development Pricing | SoftoDev";

  const description =
    locale === "ar"
      ? "اطلع على باقات أسعار SoftoDev لصفحات الهبوط، المواقع، المتاجر الإلكترونية، وأنظمة الإدارة، مع إمكانية تقديم عرض سعر مخصص."
      : "View SoftoDev pricing plans for landing pages, websites, e-commerce stores, and management systems, with custom quotes available.";

  const url = getCanonicalUrl(locale, "/pricing");

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

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isArabic = locale === "ar";
  const plans = getPricingForLocale(locale);

  return (
    <section style={{ padding: "4rem 0" }}>
      <Container>
        {/* Header */}
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
            {isArabic ? "الأسعار" : "Pricing"}
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
              ? "اختر الخطة الأنسب لمشروعك"
              : "Choose the plan that fits your project"}
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
              ? "الأسعار الموضحة هنا تقديرية وتختلف حسب حجم المشروع والتفاصيل المطلوبة. بعد أن تخبرنا عن مشروعك، سنرسل لك عرض سعر دقيق خلال 24 ساعة."
              : "These prices are starting points and may change based on project size and requirements. Once you share your project details, we’ll send a precise quote within 24 hours."}
          </p>
        </div>

        {/* Pricing grid */}
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          {plans.map((plan) => (
            <div
              key={plan.id}
              style={{
                borderRadius: "1.25rem",
                border: "1px solid #e5e7eb",
                backgroundColor: "#ffffff",
                padding: "1.75rem 1.5rem",
                boxShadow: plan.highlight
                  ? "0 20px 50px rgba(15, 23, 42, 0.12)"
                  : "0 12px 35px rgba(15, 23, 42, 0.06)",
                transform: plan.highlight ? "translateY(-4px)" : "none",
              }}
            >
              <div
                style={{
                  marginBottom: "1rem",
                  display: "flex",
                  justifyContent: isArabic ? "flex-end" : "flex-start",
                }}
              >
                {plan.highlight && (
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      padding: "0.25rem 0.75rem",
                      borderRadius: 9999,
                      background:
                        "linear-gradient(135deg, #111827, #1f2937, #111827)",
                      color: "#f9fafb",
                    }}
                  >
                    {isArabic ? "الأكثر طلبًا" : "Most popular"}
                  </span>
                )}
              </div>

              <h2
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  textAlign: isArabic ? "right" : "left",
                }}
              >
                {plan.name}
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#111827",
                  marginBottom: "0.5rem",
                  textAlign: isArabic ? "right" : "left",
                }}
              >
                {plan.priceLabel}
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  color: "#4b5563",
                  marginBottom: "1rem",
                  textAlign: isArabic ? "right" : "left",
                }}
              >
                {plan.description}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 1.25rem 0",
                }}
              >
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.9rem",
                      color: "#374151",
                      marginBottom: "0.4rem",
                      justifyContent: isArabic ? "flex-end" : "flex-start",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "0.5rem",
                        height: "0.5rem",
                        borderRadius: 9999,
                        backgroundColor: "#22c55e",
                      }}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  flexWrap: "wrap",
                  justifyContent: isArabic ? "flex-end" : "flex-start",
                }}
              >
                <a
                  href="https://wa.me/905015954826"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    borderRadius: 9999,
                    padding: "0.55rem 1.3rem",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#ffffff",
                    backgroundColor: "#111827",
                    textDecoration: "none",
                  }}
                >
                  {isArabic
                    ? "احصل على عرض سعر"
                    : "Request a custom quote"}
                </a>
                <a
                  href={isArabic ? "/ar/contact" : "/en/contact"}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    borderRadius: 9999,
                    padding: "0.55rem 1.3rem",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#111827",
                    border: "1px solid #e5e7eb",
                    textDecoration: "none",
                  }}
                >
                  {isArabic ? "تفاصيل أكثر" : "More details"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
