// components/home/portfolio-preview.tsx
import Link from "next/link";
import { Container } from "@/components/layout/container";
import type { Locale } from "@/lib/i18n/config";
import { getProjectsForLocale } from "@/lib/portfolio";

type HomePortfolioPreviewProps = {
  locale: Locale;
};

export function HomePortfolioPreview({
  locale,
}: HomePortfolioPreviewProps) {
  const isArabic = locale === "ar";
  const headingAlign = isArabic ? "right" : "left";

  const projects = getProjectsForLocale(locale).slice(0, 3); // أول 3 فقط

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
            {isArabic ? "نماذج أعمال" : "Selected work"}
          </p>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 600,
              marginBottom: "0.5rem",
            }}
          >
            {isArabic
              ? "مشاريع نفذناها لعملاء حقيقيين"
              : "Projects we’ve delivered for real clients"}
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.7,
              color: "#4b5563",
            }}
          >
            {isArabic
              ? "هذه أمثلة سريعة، يمكنك استعراض التفاصيل الكاملة من صفحة الأعمال لمشاهدة طريقة عرض المشاريع."
              : "These are quick examples. You can see full details on the portfolio page to better understand our approach."}
          </p>
        </div>

        {/* Projects grid */}
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
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
                  borderRadius: "1.1rem",
                  border: "1px solid #e5e7eb",
                  backgroundColor: "#ffffff",
                  padding: "1.25rem",
                  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    borderRadius: "0.8rem",
                    border: "1px solid #e5e7eb",
                    backgroundColor: "#f9fafb",
                    padding: "0.6rem",
                    marginBottom: "0.9rem",
                  }}
                >
                  <div
                    style={{
                      height: "80px",
                      borderRadius: "0.6rem",
                      backgroundColor: "#e5e7eb",
                      marginBottom: "0.4rem",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      gap: "0.4rem",
                      justifyContent: isArabic ? "flex-end" : "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "70px",
                        height: "50px",
                        borderRadius: "0.5rem",
                        backgroundColor: "#e5e7eb",
                      }}
                    />
                    <div
                      style={{
                        width: "35px",
                        height: "50px",
                        borderRadius: "0.5rem",
                        backgroundColor: "#e5e7eb",
                      }}
                    />
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    marginBottom: "0.3rem",
                    textAlign: headingAlign as "left" | "right" | "center",
                  }}
                >
                  {project.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                    color: "#4b5563",
                    marginBottom: "0.3rem",
                    textAlign: headingAlign as "left" | "right" | "center",
                  }}
                >
                  {project.short}
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#2563eb",
                    fontWeight: 600,
                    textAlign: headingAlign as "left" | "right" | "center",
                  }}
                >
                  {isArabic
                    ? "عرض تفاصيل المشروع →"
                    : "View project →"}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Link to full portfolio */}
        <div
          style={{
            marginTop: "1.75rem",
            textAlign: "center",
          }}
        >
          <Link
            href={`/${locale}/portfolio`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              borderRadius: 9999,
              padding: "0.6rem 1.5rem",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#111827",
              border: "1px solid #e5e7eb",
              textDecoration: "none",
            }}
          >
            {isArabic
              ? "مشاهدة جميع الأعمال"
              : "View full portfolio"}
          </Link>
        </div>
      </Container>
    </section>
  );
}
