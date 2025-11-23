// app/[locale]/portfolio/page.tsx
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import type { Locale } from "@/lib/i18n/config";
import { getCanonicalUrl } from "@/lib/seo";
import { getProjectsForLocale } from "@/lib/portfolio";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "ar"
      ? "أعمال SoftoDev | مشاريع مواقع، متاجر وأنظمة إدارة"
      : "SoftoDev Portfolio | Websites, Stores & Management Systems";

  const description =
    locale === "ar"
      ? "استعرض بعض المشاريع التي عملت عليها SoftoDev في تطوير مواقع، متاجر إلكترونية وأنظمة إدارة مخصصة لسوق الخليج والعراق."
      : "Explore selected projects by SoftoDev: websites, e-commerce stores, and custom management systems built for the GCC and Iraq market.";

  const url = getCanonicalUrl(locale, "/portfolio");

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: { title, description, url },
    twitter: { title, description },
  };
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isArabic = locale === "ar";
  const projects = getProjectsForLocale(locale);

  const headingAlign = isArabic ? "right" : "left";

  return (
    <section style={{ padding: "4rem 0" }}>
      <Container>
        {/* Header */}
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto 2.5rem auto",
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
              marginBottom: "0.75rem",
            }}
          >
            {isArabic
              ? "نماذج من مشاريع نفذناها لعملاء في الخليج والعراق"
              : "Selected projects we’ve delivered for clients in the GCC and Iraq"}
          </h1>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: "#4b5563",
            }}
          >
            {isArabic
              ? "هذه أمثلة مختارة من أعمال SoftoDev، الهدف منها إعطاؤك فكرة عن نوعية المشاريع، الجودة، وطريقة عرض المحتوى."
              : "These selected projects give you an idea of our quality, project types, and how we structure content and UX."}
          </p>
        </div>

        {/* Projects grid */}
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/${locale}/portfolio/${project.slug}`}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  borderRadius: "1.25rem",
                  border: "1px solid #e5e7eb",
                  backgroundColor: "#ffffff",
                  padding: "1.5rem",
                  boxShadow: "0 14px 35px rgba(15, 23, 42, 0.06)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Mockup area */}
                <div
                  style={{
                    borderRadius: "0.9rem",
                    border: "1px solid #e5e7eb",
                    backgroundColor: "#f9fafb",
                    padding: "0.75rem",
                    marginBottom: "1rem",
                  }}
                >
                  {/* Laptop + phone concept */}
                  <div
                    style={{
                      height: "110px",
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
                        width: "80px",
                        height: "60px",
                        borderRadius: "0.6rem",
                        backgroundColor: "#e5e7eb",
                      }}
                    />
                    <div
                      style={{
                        width: "40px",
                        height: "60px",
                        borderRadius: "0.6rem",
                        backgroundColor: "#e5e7eb",
                      }}
                    />
                  </div>
                </div>

                {/* Text */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "0.75rem",
                      marginBottom: "0.35rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.8rem",
                        padding: "0.2rem 0.6rem",
                        borderRadius: 9999,
                        backgroundColor: "#eff6ff",
                        color: "#1d4ed8",
                      }}
                    >
                      {project.industry}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        padding: "0.2rem 0.6rem",
                        borderRadius: 9999,
                        backgroundColor: "#f9fafb",
                        border: "1px solid #e5e7eb",
                        color: "#4b5563",
                      }}
                    >
                      {project.country}
                    </div>
                  </div>
                  <h2
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      marginBottom: "0.4rem",
                      textAlign: headingAlign as "left" | "right" | "center",
                    }}
                  >
                    {project.name}
                  </h2>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                      color: "#4b5563",
                      marginBottom: "0.4rem",
                      textAlign: headingAlign as "left" | "right" | "center",
                    }}
                  >
                    {project.short}
                  </p>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#2563eb",
                      fontWeight: 600,
                      textAlign: headingAlign as "left" | "right" | "center",
                    }}
                  >
                    {isArabic
                      ? "عرض تفاصيل المشروع →"
                      : "View project details →"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
