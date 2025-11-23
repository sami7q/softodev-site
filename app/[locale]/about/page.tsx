// app/[locale]/about/page.tsx
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
      ? "عن SoftoDev | من نحن ولماذا نركز على سوق الخليج والعراق"
      : "About SoftoDev | Who We Are and Why We Focus on GCC & Iraq";

  const description =
    locale === "ar"
      ? "SoftoDev شركة برمجيات تركز على بناء مواقع، متاجر إلكترونية وأنظمة إدارة مخصصة لسوق الخليج والعراق، مع اهتمام عالي بالأداء وتجربة المستخدم."
      : "SoftoDev is a software agency focused on building websites, e-commerce stores, and custom management systems for the GCC and Iraq market with high performance and UX standards.";

  const url = getCanonicalUrl(locale, "/about");

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

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isArabic = locale === "ar";
  const align = isArabic ? "right" : "left";

  return (
    <section style={{ padding: "4rem 0" }}>
      <Container>
        {/* العنوان الرئيسي */}
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto 2.5rem auto",
            textAlign: align as "left" | "right" | "center",
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
            {isArabic ? "عن الشركة" : "About"}
          </p>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: 600,
              marginBottom: "0.75rem",
            }}
          >
            {isArabic
              ? "SoftoDev – شريكك التقني لبناء حلول برمجية تناسب السوق العربي"
              : "SoftoDev – Your technical partner for building solutions tailored to Arab markets"}
          </h1>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: "#4b5563",
            }}
          >
            {isArabic
              ? "نحن فريق برمجي يركز على بناء حلول عملية حقيقية: مواقع سريعة، متاجر إلكترونية جاهزة للتسويق، وأنظمة إدارة مخصصة للشركات والعيادات في الخليج والعراق."
              : "We are a software team focused on building real, practical solutions: fast websites, marketing-ready e-commerce stores, and custom management systems for businesses and clinics across the GCC and Iraq."}
          </p>
        </div>

        {/* Grid: قصة + قيم */}
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "minmax(0, 1.7fr) minmax(0, 1.3fr)",
            marginBottom: "2.5rem",
          }}
        >
          {/* من نحن */}
          <div>
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: 600,
                marginBottom: "0.6rem",
                textAlign: align as "left" | "right" | "center",
              }}
            >
              {isArabic ? "من نحن" : "Who we are"}
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "#374151",
                marginBottom: "0.75rem",
                textAlign: align as "left" | "right" | "center",
              }}
            >
              {isArabic
                ? "SoftoDev ليست مجرد “موقع” أو “قالب جاهز”، بل شريك يفهم طبيعة السوق العربي والتحديات الرقمية التي تواجه المشاريع في الخليج والعراق – من سرعة الإنترنت إلى سلوك المستخدم والتنافس في الإعلانات."
                : "SoftoDev is not just another template or one-off website project. We position ourselves as a partner that understands the Arab market, especially GCC and Iraq, from user behavior and ad competition to infrastructure limitations."}
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "#374151",
                textAlign: align as "left" | "right" | "center",
              }}
            >
              {isArabic
                ? "لذلك نركز على السرعة، وضوح الرسالة، وتجربة المستخدم، مع كود نظيف يمكن تطويره لاحقًا إلى أنظمة أكبر أو ربطه بتطبيقات وموبايل."
                : "That’s why we focus on speed, clear messaging, and user experience, with clean code that can grow into larger systems or integrate with mobile apps in the future."}
            </p>
          </div>

          {/* قيم الشركة */}
          <div
            style={{
              borderRadius: "1.25rem",
              border: "1px solid #e5e7eb",
              backgroundColor: "#ffffff",
              padding: "1.5rem 1.25rem",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                marginBottom: "0.6rem",
                textAlign: align as "left" | "right" | "center",
              }}
            >
              {isArabic ? "قيم نلتزم بها" : "Values we care about"}
            </h3>
            <ul
              style={{
                listStyle: "disc",
                paddingInlineStart: isArabic ? "1.4rem" : "1.4rem",
                margin: 0,
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: "#374151",
              }}
            >
              <li>
                {isArabic
                  ? "السرعة والأداء أولًا – الموقع أو النظام يجب أن يكون سريعًا على الموبايل قبل أي شيء."
                  : "Performance first – your website or system must feel fast on mobile before anything else."}
              </li>
              <li>
                {isArabic
                  ? "الكود النظيف – نكتب مشاريع يمكن تطويرها وصيانتها بسهولة لاحقًا."
                  : "Clean code – we build projects that can be evolved and maintained easily over time."}
              </li>
              <li>
                {isArabic
                  ? "الوضوح في التواصل – لا مصطلحات تقنية معقدة، بل لغة بسيطة وشفافة في الاتفاق والتنفيذ."
                  : "Clear communication – no unnecessary jargon, just transparent and simple communication."}
              </li>
              <li>
                {isArabic
                  ? "التركيز على النتيجة – هدفنا النهائي أن ينجح مشروعك، وليس فقط تسليم كود."
                  : "Outcome-focused – our goal is your project’s success, not just delivering code."}
              </li>
            </ul>
          </div>
        </div>

        {/* من نخدم + CTA */}
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "minmax(0, 1.3fr) minmax(0, 1.7fr)",
          }}
        >
          <div
            style={{
              borderRadius: "1.25rem",
              border: "1px solid #e5e7eb",
              backgroundColor: "#ffffff",
              padding: "1.5rem 1.25rem",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                marginBottom: "0.6rem",
                textAlign: align as "left" | "right" | "center",
              }}
            >
              {isArabic ? "من نخدم؟" : "Who we work with"}
            </h3>
            <ul
              style={{
                listStyle: "disc",
                paddingInlineStart: isArabic ? "1.4rem" : "1.4rem",
                margin: 0,
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: "#374151",
              }}
            >
              <li>
                {isArabic
                  ? "أصحاب المشاريع الصغيرة والمتوسطة في الخليج والعراق."
                  : "Small and medium businesses in the GCC and Iraq."}
              </li>
              <li>
                {isArabic
                  ? "العيادات والمراكز الطبية التي تحتاج نظام إدارة أو موقع تعريفي احترافي."
                  : "Clinics and medical centers needing management systems or professional websites."}
              </li>
              <li>
                {isArabic
                  ? "المتاجر الإلكترونية والعلامات التجارية التي تريد متجراً سريعاً وواضحاً."
                  : "Online stores and brands that want fast, conversion-focused storefronts."}
              </li>
              <li>
                {isArabic
                  ? "رواد الأعمال الذين يرغبون في MVP أو منتج أولي برمجي لاختبار الفكرة."
                  : "Founders needing an MVP to validate their product ideas."}
              </li>
            </ul>
          </div>

          <div
            style={{
              borderRadius: "1.25rem",
              background:
                "linear-gradient(135deg, #020617, #111827, #020617)",
              padding: "1.75rem 1.5rem",
              color: "#e5e7eb",
              textAlign: align as "left" | "right" | "center",
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
                ? "هل تريد أن نعمل على مشروعك القادم؟"
                : "Want us to work on your next project?"}
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                marginBottom: "0.75rem",
                lineHeight: 1.6,
              }}
            >
              {isArabic
                ? "يمكننا بدء العمل من جلسة استشارة مجانية لتوضيح الفكرة، ثم نرسل لك خطة تنفيذ واضحة وزمن تقريبي للتسليم."
                : "We can start with a free consultation to clarify your idea, then send you a clear implementation plan and estimated delivery timeline."}
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
      </Container>
    </section>
  );
}
