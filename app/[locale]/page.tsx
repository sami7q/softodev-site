// app/[locale]/page.tsx
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import type { Locale } from "@/lib/i18n/config";
import { getCanonicalUrl } from "@/lib/seo";
import { HomePortfolioPreview } from "@/components/home/portfolio-preview";
import { HomePricingTeaser } from "@/components/home/pricing-teaser";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "ar"
      ? "SoftoDev | شركة برمجة مواقع ومتاجر وأنظمة إدارة"
      : "SoftoDev | Web Development, E-commerce & Management Systems";

  const description =
    locale === "ar"
      ? "SoftoDev متخصصة في تطوير صفحات هبوط، متاجر إلكترونية، وأنظمة إدارة مخصصة لسوق الخليج والعراق."
      : "SoftoDev builds landing pages, e-commerce stores, and custom management systems for the GCC and Iraq market.";

  const url = getCanonicalUrl(locale, "/");

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

export default async function HomePage({
  params,
}: {
  // Next 16: params is Promise
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isArabic = locale === "ar";

  return (
    <div>
      {/* Hero */}
      <section style={{ padding: "4rem 0" }}>
        <Container>
          <div
            style={{
              display: "grid",
              gap: "2.5rem",
              alignItems: "center",
            }}
          >
            <div style={{ maxWidth: 640 }}>
              <p
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "#6b7280",
                  marginBottom: "0.75rem",
                }}
              >
                {isArabic
                  ? "شركة برمجة مواقع ومتاجر"
                  : "Web & Software Agency"}
              </p>
              <h1
                style={{
                  fontSize: "2rem",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  marginBottom: "1rem",
                }}
              >
                {isArabic
                  ? "نبني مواقع ومتاجر إلكترونية سريعة ومخصصة لسوق الخليج والعراق"
                  : "We build fast, modern websites and stores for the GCC & Iraq market."}
              </h1>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "#4b5563",
                  marginBottom: "1.5rem",
                }}
              >
                {isArabic
                  ? "SoftoDev متخصصة في تطوير صفحات هبوط، متاجر إلكترونية، وأنظمة إدارة مخصصة تساعدك على إطلاق مشروعك بسرعة وبجودة عالية."
                  : "SoftoDev specializes in landing pages, e-commerce stores, and custom management systems to help you launch fast with high quality."}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="https://wa.me/905015954826"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    borderRadius: 9999,
                    padding: "0.6rem 1.4rem",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#ffffff",
                    backgroundColor: "#111827",
                    textDecoration: "none",
                  }}
                >
                  {isArabic ? "تواصل عبر الواتساب" : "Chat on WhatsApp"}
                </a>
                <a
                  href={isArabic ? "/ar/services" : "/en/services"}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    borderRadius: 9999,
                    padding: "0.6rem 1.4rem",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#111827",
                    border: "1px solid #e5e7eb",
                    textDecoration: "none",
                  }}
                >
                  {isArabic ? "شاهد خدماتنا" : "View Services"}
                </a>
              </div>
            </div>

            {/* Placeholder block */}
            <div
              style={{
                borderRadius: "1.25rem",
                border: "1px solid #e5e7eb",
                backgroundColor: "#ffffff",
                padding: "1.5rem",
                boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
                maxWidth: 480,
              }}
            >
              <div
                style={{
                  height: "0.75rem",
                  width: "5rem",
                  borderRadius: 9999,
                  backgroundColor: "#e5e7eb",
                  marginBottom: "1rem",
                }}
              />
              <div
                style={{
                  height: "1.25rem",
                  width: "10rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "#f3f4f6",
                  marginBottom: "0.75rem",
                }}
              />
              <div
                style={{
                  height: "1rem",
                  width: "100%",
                  borderRadius: "0.5rem",
                  backgroundColor: "#f3f4f6",
                  marginBottom: "1.5rem",
                }}
              />
              <div
                style={{
                  display: "grid",
                  gap: "0.75rem",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                }}
              >
                <div
                  style={{
                    height: "5rem",
                    borderRadius: "0.75rem",
                    backgroundColor: "#f3f4f6",
                  }}
                />
                <div
                  style={{
                    height: "5rem",
                    borderRadius: "0.75rem",
                    backgroundColor: "#f3f4f6",
                  }}
                />
                <div
                  style={{
                    height: "5rem",
                    borderRadius: "0.75rem",
                    backgroundColor: "#f3f4f6",
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing teaser */}
      <HomePricingTeaser locale={locale} />

      {/* Portfolio preview */}
      <HomePortfolioPreview locale={locale} />
    </div>
  );
}
