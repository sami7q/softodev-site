import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/seo";

// app/[locale]/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import type { Locale } from "@/lib/i18n/config";
import {
  getAllServiceSlugs,
  getServiceBySlug,
  type ServiceSlug,
} from "@/lib/services";

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();

  // لكل لغة نولد مسار
  const locales: Locale[] = ["ar", "en"];

  return locales.flatMap((locale) =>
    slugs.map((slug) => ({
      locale,
      slug,
    })),
  );
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: ServiceSlug }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug, locale);

  if (!service) {
    return {};
  }

  const title = service.title;
  const description = service.intro;
  const url = getCanonicalUrl(locale, `/services/${slug}`);

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

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: ServiceSlug }>;
}) {
  const { locale, slug } = await params;
  const isArabic = locale === "ar";

  const service = getServiceBySlug(slug, locale);
  if (!service) {
    notFound();
  }

  return (
    <section style={{ padding: "4rem 0" }}>
      <Container>
        <article
          style={{
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
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
            {service.title}
          </h1>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: "#4b5563",
              marginBottom: "1.5rem",
              textAlign: isArabic ? "right" : "left",
            }}
          >
            {service.intro}
          </p>

          <div
            style={{
              padding: "1.5rem",
              borderRadius: "1.25rem",
              border: "1px solid #e5e7eb",
              backgroundColor: "#ffffff",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "#374151",
                textAlign: isArabic ? "right" : "left",
              }}
            >
              {service.body}
            </p>
          </div>

          <div
            style={{
              padding: "1.25rem 1.5rem",
              borderRadius: "1.25rem",
              background:
                "linear-gradient(135deg, #111827, #1f2937, #111827)",
              color: "#f9fafb",
              textAlign: isArabic ? "right" : "left",
            }}
          >
            <h2
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}
            >
              {isArabic
                ? "جاهز لنبدأ في مشروعك؟"
                : "Ready to start your project?"}
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                marginBottom: "0.75rem",
              }}
            >
              {isArabic
                ? "تواصل معنا وسنقترح عليك أفضل خطة تنفيذ وسعر مناسب بناءً على احتياجك."
                : "Contact us and we’ll propose the best implementation plan and pricing based on your needs."}
            </p>
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
                  padding: "0.6rem 1.4rem",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#111827",
                  backgroundColor: "#f9fafb",
                  textDecoration: "none",
                }}
              >
                {isArabic ? "تواصل عبر الواتساب" : "Chat on WhatsApp"}
              </a>
              <a
                href={isArabic ? "/ar/contact" : "/en/contact"}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: 9999,
                  padding: "0.6rem 1.4rem",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  textDecoration: "none",
                }}
              >
                {isArabic ? "نموذج التواصل" : "Contact form"}
              </a>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
