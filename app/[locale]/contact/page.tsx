// app/[locale]/contact/page.tsx
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import type { Locale } from "@/lib/i18n/config";
import { getCanonicalUrl } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "ar"
      ? "تواصل مع SoftoDev | استشارة مجانية لمشروعك"
      : "Contact SoftoDev | Free Project Consultation";

  const description =
    locale === "ar"
      ? "تواصل مع SoftoDev لمناقشة مشروعك البرمجي أو متجرك الإلكتروني أو نظام الإدارة الخاص بشركتك. استشارة أولية مجانية."
      : "Contact SoftoDev to discuss your website, e-commerce store, or management system. Initial consultation is free.";

  const url = getCanonicalUrl(locale, "/contact");

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

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isArabic = locale === "ar";

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
            {isArabic ? "تواصل معنا" : "Contact"}
          </p>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: 600,
              marginBottom: "0.75rem",
            }}
          >
            {isArabic
              ? "لنناقش فكرة مشروعك أو احتياج شركتك"
              : "Let’s talk about your project or company needs"}
          </h1>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: "#4b5563",
            }}
          >
            {isArabic
              ? "املأ النموذج التالي أو تواصل مباشرة عبر الواتساب. سنرد عليك خلال أقل من 24 ساعة بخطة عمل مبدئية وسعر تقريبي."
              : "Fill out the form below or contact us directly via WhatsApp. We’ll get back to you within 24 hours with an initial plan and estimated pricing."}
          </p>
        </div>

        {/* Content: form + contact info */}
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "minmax(0, 2.2fr) minmax(0, 1.3fr)",
          }}
        >
          {/* Form */}
          <div
            style={{
              borderRadius: "1.25rem",
              border: "1px solid #e5e7eb",
              backgroundColor: "#ffffff",
              padding: "1.75rem 1.5rem",
              boxShadow: "0 14px 35px rgba(15, 23, 42, 0.06)",
            }}
          >
            {/* لاحقاً نضيف Backend أو خدمة خارجية */}
            <form
              method="post"
              action="#"
              style={{
                display: "grid",
                gap: "1rem",
              }}
            >
              {/* Name */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#111827",
                    marginBottom: "0.25rem",
                    textAlign: headingAlign as "left" | "right" | "center",
                  }}
                >
                  {isArabic ? "الاسم الكامل" : "Full name"}
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder={isArabic ? "اكتب اسمك هنا" : "Enter your name"}
                  style={{
                    width: "100%",
                    padding: "0.6rem 0.8rem",
                    borderRadius: "0.75rem",
                    border: "1px solid #e5e7eb",
                    fontSize: "0.9rem",
                  }}
                />
              </div>

              {/* WhatsApp / Phone */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#111827",
                    marginBottom: "0.25rem",
                    textAlign: headingAlign as "left" | "right" | "center",
                  }}
                >
                  {isArabic ? "رقم الواتساب" : "WhatsApp number"}
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder={
                    isArabic ? "مثال: +9665..." : "e.g. +9665..., +9715..."
                  }
                  style={{
                    width: "100%",
                    padding: "0.6rem 0.8rem",
                    borderRadius: "0.75rem",
                    border: "1px solid #e5e7eb",
                    fontSize: "0.9rem",
                  }}
                />
              </div>

              {/* Project type */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#111827",
                    marginBottom: "0.25rem",
                    textAlign: headingAlign as "left" | "right" | "center",
                  }}
                >
                  {isArabic ? "نوع المشروع" : "Project type"}
                </label>
                <select
                  name="projectType"
                  style={{
                    width: "100%",
                    padding: "0.6rem 0.8rem",
                    borderRadius: "0.75rem",
                    border: "1px solid #e5e7eb",
                    fontSize: "0.9rem",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <option value="">
                    {isArabic
                      ? "اختر نوع المشروع"
                      : "Select a project type"}
                  </option>
                  <option value="landing">
                    {isArabic
                      ? "صفحة هبوط / صفحة تعريفية"
                      : "Landing page / simple website"}
                  </option>
                  <option value="store">
                    {isArabic ? "متجر إلكتروني" : "E-commerce store"}
                  </option>
                  <option value="system">
                    {isArabic ? "نظام إدارة مخصص" : "Custom management system"}
                  </option>
                  <option value="other">
                    {isArabic ? "أخرى" : "Other"}
                  </option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#111827",
                    marginBottom: "0.25rem",
                    textAlign: headingAlign as "left" | "right" | "center",
                  }}
                >
                  {isArabic
                    ? "الميزانية المتوقعة (اختياري)"
                    : "Estimated budget (optional)"}
                </label>
                <input
                  type="text"
                  name="budget"
                  placeholder={
                    isArabic
                      ? "مثال: من 500$ إلى 2000$"
                      : "e.g. from $500 to $2000"
                  }
                  style={{
                    width: "100%",
                    padding: "0.6rem 0.8rem",
                    borderRadius: "0.75rem",
                    border: "1px solid #e5e7eb",
                    fontSize: "0.9rem",
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#111827",
                    marginBottom: "0.25rem",
                    textAlign: headingAlign as "left" | "right" | "center",
                  }}
                >
                  {isArabic ? "وصف المشروع" : "Project details"}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder={
                    isArabic
                      ? "صف فكرتك، نوع النشاط، وعدد الصفحات أو الميزات الأساسية التي تحتاجها..."
                      : "Describe your idea, business type, and key pages or features you need..."
                  }
                  style={{
                    width: "100%",
                    padding: "0.6rem 0.8rem",
                    borderRadius: "0.75rem",
                    border: "1px solid #e5e7eb",
                    fontSize: "0.9rem",
                    resize: "vertical",
                  }}
                />
              </div>

              {/* Submit */}
              <div
                style={{
                  marginTop: "0.5rem",
                  display: "flex",
                  justifyContent: isArabic ? "flex-end" : "flex-start",
                }}
              >
                <button
                  type="submit"
                  style={{
                    borderRadius: 9999,
                    padding: "0.7rem 1.5rem",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#ffffff",
                    backgroundColor: "#111827",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {isArabic ? "إرسال الطلب" : "Send request"}
                </button>
              </div>
            </form>
          </div>

          {/* Contact info panel */}
          <div
            style={{
              borderRadius: "1.25rem",
              border: "1px solid #e5e7eb",
              background:
                "linear-gradient(135deg, #020617, #111827, #020617)",
              color: "#e5e7eb",
              padding: "1.75rem 1.5rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                marginBottom: "0.6rem",
                textAlign: headingAlign as "left" | "right" | "center",
              }}
            >
              {isArabic
                ? "معلومات التواصل المباشر"
                : "Direct contact details"}
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.6,
                marginBottom: "1rem",
                textAlign: headingAlign as "left" | "right" | "center",
              }}
            >
              {isArabic
                ? "تستطيع التواصل مباشرة عبر الواتساب أو البريد الإلكتروني إذا كنت تفضّل ذلك على النموذج."
                : "You can also reach out directly via WhatsApp or email if you prefer that over the form."}
            </p>

            <div
              style={{
                display: "grid",
                gap: "0.75rem",
                fontSize: "0.9rem",
              }}
            >
              <div>
                <div style={{ opacity: 0.8, marginBottom: "0.15rem" }}>
                  {isArabic ? "واتساب" : "WhatsApp"}
                </div>
                <a
                  href="https://wa.me/905015954826"
                  style={{
                    color: "#22c55e",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  +90 501 595 4826
                </a>
              </div>

              <div>
                <div style={{ opacity: 0.8, marginBottom: "0.15rem" }}>
                  {isArabic ? "الهاتف" : "Phone"}
                </div>
                <a
                  href="tel:+905015954826"
                  style={{
                    color: "#e5e7eb",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  +90 501 595 4826
                </a>
              </div>

              <div>
                <div style={{ opacity: 0.8, marginBottom: "0.15rem" }}>
                  {isArabic ? "البريد الإلكتروني" : "Email"}
                </div>
                <a
                  href="mailto:sami22eng@gmail.com"
                  style={{
                    color: "#e5e7eb",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  sami22eng@gmail.com
                </a>
              </div>
            </div>

            <div
              style={{
                marginTop: "1.25rem",
                fontSize: "0.8rem",
                opacity: 0.8,
                textAlign: headingAlign as "left" | "right" | "center",
              }}
            >
              {isArabic
                ? "نستهدف بشكل خاص السوق الخليجي (السعودية، الإمارات، قطر، الكويت، البحرين، عمان) بالإضافة إلى العراق."
                : "We primarily serve the GCC market (Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman) and Iraq."}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
