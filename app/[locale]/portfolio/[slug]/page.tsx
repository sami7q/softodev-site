// app/[locale]/portfolio/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import type { Locale } from "@/lib/i18n/config";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  type PortfolioSlug,
} from "@/lib/portfolio";
import { getCanonicalUrl, siteUrl } from "@/lib/seo";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
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
  params: Promise<{ locale: Locale; slug: PortfolioSlug }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug, locale);

  if (!project) {
    return {};
  }

  const title =
    locale === "ar"
      ? `${project.name} | أعمال SoftoDev`
      : `${project.name} | SoftoDev Portfolio`;

  const description = project.short;
  const url = getCanonicalUrl(locale, `/portfolio/${slug}`);

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

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: PortfolioSlug }>;
}) {
  const { locale, slug } = await params;
  const isArabic = locale === "ar";

  const project = getProjectBySlug(slug, locale);
  if (!project) {
    notFound();
  }

  const headingAlign = isArabic ? "right" : "left";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.short,
    creator: {
      "@type": "Organization",
      name: "SoftoDev",
      url: siteUrl,
    },
    about: project.industry,
    audience: {
      "@type": "BusinessAudience",
      name: "Businesses in GCC and Iraq",
    },
  };

  return (
    <section style={{ padding: "4rem 0" }}>
      <Container>
        <article
          style={{
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {/* Header */}
          <div
            style={{
              marginBottom: "2rem",
              textAlign: headingAlign as "left" | "right" | "center",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#6b7280",
                marginBottom: "0.75rem",
              }}
            >
              {isArabic ? "أعمالنا" : "Portfolio"}
            </p>
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}
            >
              {project.name}
            </h1>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "#4b5563",
              }}
            >
              {project.short}
            </p>
          </div>

          {/* Mockup section */}
          <div
            style={{
              borderRadius: "1.25rem",
              border: "1px solid #e5e7eb",
              backgroundColor: "#ffffff",
              padding: "1.5rem",
              boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                borderRadius: "0.9rem",
                border: "1px solid #e5e7eb",
                backgroundColor: "#f9fafb",
                padding: "0.75rem",
              }}
            >
              <div
                style={{
                  height: "160px",
                  borderRadius: "0.7rem",
                  backgroundColor: "#e5e7eb",
                  marginBottom: "0.5rem",
                }}
              />
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  justifyContent: isArabic ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "70px",
                    borderRadius: "0.6rem",
                    backgroundColor: "#e5e7eb",
                  }}
                />
                <div
                  style={{
                    width: "50px",
                    height: "70px",
                    borderRadius: "0.6rem",
                    backgroundColor: "#e5e7eb",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Info grid */}
          <div
            style={{
              display: "grid",
              gap: "1.75rem",
              gridTemplateColumns: "minmax(0, 1.8fr) minmax(0, 1.2fr)",
              marginBottom: "2rem",
            }}
          >
            {/* Left: description & result */}
            <div>
              <h2
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  marginBottom: "0.6rem",
                  textAlign: headingAlign as "left" | "right" | "center",
                }}
              >
                {isArabic ? "عن المشروع" : "About the project"}
              </h2>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  color: "#374151",
                  marginBottom: "1rem",
                  textAlign: headingAlign as "left" | "right" | "center",
                }}
              >
                {project.result}
              </p>
            </div>

            {/* Right: meta */}
            <div
              style={{
                borderRadius: "1rem",
                border: "1px solid #e5e7eb",
                backgroundColor: "#ffffff",
                padding: "1.25rem 1rem",
                fontSize: "0.9rem",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gap: "0.5rem",
                }}
              >
                <div>
                  <div style={{ opacity: 0.8, marginBottom: "0.15rem" }}>
                    {isArabic ? "القطاع" : "Industry"}
                  </div>
                  <div style={{ fontWeight: 600 }}>{project.industry}</div>
                </div>
                <div>
                  <div style={{ opacity: 0.8, marginBottom: "0.15rem" }}>
                    {isArabic ? "الدولة / السوق" : "Country / Market"}
                  </div>
                  <div style={{ fontWeight: 600 }}>{project.country}</div>
                </div>
                <div>
                  <div style={{ opacity: 0.8, marginBottom: "0.15rem" }}>
                    {isArabic ? "الخدمات المقدمة" : "Services delivered"}
                  </div>
                  <ul
                    style={{
                      listStyle: "disc",
                      paddingInlineStart: isArabic ? "1.4rem" : "1.4rem",
                      margin: 0,
                    }}
                  >
                    {project.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Tech & CTA */}
          <div
            style={{
              display: "grid",
              gap: "1.75rem",
              gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1.8fr)",
            }}
          >
            {/* Tech stack */}
            <div
              style={{
                borderRadius: "1rem",
                border: "1px solid #e5e7eb",
                backgroundColor: "#ffffff",
                padding: "1.25rem 1rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: "0.6rem",
                  textAlign: headingAlign as "left" | "right" | "center",
                }}
              >
                {isArabic ? "التقنيات المستخدمة" : "Tech stack"}
              </h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                }}
              >
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: "0.8rem",
                      padding: "0.25rem 0.6rem",
                      borderRadius: 9999,
                      backgroundColor: "#f3f4f6",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div
              style={{
                borderRadius: "1rem",
                background:
                  "linear-gradient(135deg, #020617, #111827, #020617)",
                padding: "1.5rem 1.25rem",
                color: "#e5e7eb",
                textAlign: headingAlign as "left" | "right" | "center",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                }}
              >
                {isArabic
                  ? "هل تريد مشروعًا مشابهًا لهذا؟"
                  : "Want a similar project for your business?"}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  marginBottom: "0.75rem",
                  lineHeight: 1.6,
                }}
              >
                {isArabic
                  ? "تواصل معنا وسنقترح عليك أفضل طريقة لتنفيذ مشروع مشابه يناسب نشاطك وميزانيتك."
                  : "Contact us and we’ll propose the best way to build a similar solution tailored to your business and budget."}
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
                    color: "#e5e7eb",
                    border: "1px solid #e5e7eb",
                    textDecoration: "none",
                  }}
                >
                  {isArabic ? "نموذج التواصل" : "Contact form"}
                </a>
              </div>
            </div>
          </div>

          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </article>
      </Container>
    </section>
  );
}
