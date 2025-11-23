// components/home/pricing-teaser.tsx
import Link from "next/link";
import { Container } from "@/components/layout/container";
import type { Locale } from "@/lib/i18n/config";
import { getPricingForLocale } from "@/lib/pricing";

type HomePricingTeaserProps = {
  locale: Locale;
};

export function HomePricingTeaser({ locale }: HomePricingTeaserProps) {
  const isArabic = locale === "ar";
  const headingAlign = isArabic ? "right" : "left";

  const plans = getPricingForLocale(locale);

  return (
    <section style={{ padding: "3.5rem 0" }}>
      <Container>
        {/* Header */}
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto 2rem auto",
            textAlign: headingAlign as "left" | "right" | "center",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#6b7280",
              marginBottom: "0.5rem",
            }}
          >
            {isArabic ? "الأسعار" : "Pricing"}
          </p>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 600,
              marginBottom: "0.5rem",
            }}
          >
            {isArabic
              ? "باقات تبدأ من 199$ وتصل حتى مشاريع مخصصة للشركات"
              : "Plans from $199 up to fully custom company systems"}
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.7,
              color: "#4b5563",
            }}
          >
            {isArabic
              ? "الأسعار تختلف حسب تفاصيل المشروع، لكن هذه نظرة سريعة على الباقات الرئيسية التي نقدمها."
              : "Prices vary based on your project details, but here’s a quick overview of our main plans."}
          </p>
        </div>

        {/* Plans row (مختصر) */}
        <div
          style={{
            display: "grid",
            gap: "1.25rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          }}
        >
          {plans.map((plan) => (
            <div
              key={plan.id}
              style={{
                borderRadius: "1.1rem",
                border: "1px solid #e5e7eb",
                backgroundColor: "#ffffff",
                padding: "1.25rem",
                boxShadow: "0 10px 25px rgba(15, 23, 42, 0.05)",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: "0.25rem",
                  textAlign: headingAlign as "left" | "right" | "center",
                }}
              >
                {plan.name}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#111827",
                  marginBottom: "0.3rem",
                  textAlign: headingAlign as "left" | "right" | "center",
                }}
              >
                {plan.priceLabel}
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  color: "#4b5563",
                  textAlign: headingAlign as "left" | "right" | "center",
                }}
              >
                {plan.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA to full pricing */}
        <div
          style={{
            marginTop: "1.75rem",
            textAlign: "center",
          }}
        >
          <Link
            href={`/${locale}/pricing`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              borderRadius: 9999,
              padding: "0.6rem 1.5rem",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#ffffff",
              backgroundColor: "#111827",
              textDecoration: "none",
            }}
          >
            {isArabic
              ? "شاهد تفاصيل الأسعار كاملة"
              : "View full pricing details"}
          </Link>
        </div>
      </Container>
    </section>
  );
}
