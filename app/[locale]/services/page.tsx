// app/[locale]/services/page.tsx
import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getCanonicalUrl } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "ar"
      ? "خدمات SoftoDev | صفحات هبوط، متاجر، أنظمة وبرمجة مخصصة"
      : "SoftoDev Services | Landing Pages, Stores & Custom Systems";

  const description =
    locale === "ar"
      ? "اكتشف خدمات SoftoDev: صفحات هبوط، متاجر إلكترونية، مواقع كاملة، أنظمة إدارة مخصصة، تسويق رقمي، هوية بصرية، وبوتات ذكاء اصطناعي."
      : "Explore SoftoDev services: landing pages, online stores, full websites, custom management systems, digital marketing, visual identity, and AI bots.";

  const url = getCanonicalUrl(locale, "/services");

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { title, description },
  };
}

type ServiceCard = {
  id: string;
  badge: string;
  title: string;
  short: string;
  bullets: string[];
};

function getServices(locale: Locale): ServiceCard[] {
  const isArabic = locale === "ar";

  if (isArabic) {
    return [
      {
        id: "landing-pages",
        badge: "01",
        title: "صفحات الهبوط",
        short: "صفحات تسويقية سريعة جاهزة للإعلانات والتحويل.",
        bullets: [
          "تصميم احترافي متوافق مع الهوية البصرية.",
          "تهيئة للإعلانات (TikTok, Snapchat, Meta…).",
          "سرعة عالية وتجربة مستخدم بسيطة.",
        ],
      },
      {
        id: "ecommerce",
        badge: "02",
        title: "متاجر إلكترونية",
        short: "متاجر جاهزة للبيع مع بوابات دفع وشحن.",
        bullets: [
          "ربط بوابات الدفع وخيارات الشحن المناسبة لسوقك.",
          "لوحة تحكم بسيطة لإدارة المنتجات والطلبات.",
          "تصميم متجاوب يعمل على جميع الأجهزة.",
        ],
      },
      {
        id: "websites",
        badge: "03",
        title: "تصميم مواقع كاملة",
        short: "مواقع تعريفية للشركات، العيادات، والمشاريع الناشئة.",
        bullets: [
          "هيكل صفحات منظم يعرض خدماتك بوضوح.",
          "محتوى متوافق مع الـ SEO ومحركات البحث.",
          "دمج نماذج تواصل، خرائط، وأزرار واتساب.",
        ],
      },
      {
        id: "systems",
        badge: "04",
        title: "أنظمة برمجية للشركات والعيادات",
        short: "أنظمة إدارة مخصصة لسير عملك الفعلي.",
        bullets: [
          "لوحات تحكم لإدارة العملاء، الفواتير، والمواعيد.",
          "إمكانية العمل أونلاين أو أوفلاين حسب الحاجة.",
          "بنية قابلة للتوسع مع نمو عملك.",
        ],
      },
      {
        id: "marketing",
        badge: "05",
        title: "خدمات التسويق الرقمي",
        short: "إعلانات مدروسة للوصول لأكبر شريحة جمهور ممكنة.",
        bullets: [
          "إعداد حملات إعلانية على المنصات المناسبة لسوقك.",
          "تحسين صفحات الهبوط لرفع نسبة التحويل.",
          "تقارير بسيطة توضّح النتائج والأرقام المهمة.",
        ],
      },
      {
        id: "branding",
        badge: "06",
        title: "تصميم هوية بصرية وشعارات",
        short: "كل ما يخص هوية مشروعك من شعار إلى مواد تسويقية.",
        bullets: [
          "تصميم شعار (Logo) حديث وواضح.",
          "اختيار ألوان وخطوط متناسقة مع مجال عملك.",
          "تصميم مواد رقمية: كروت، بوستات، غلافات وغيرها.",
        ],
      },
      {
        id: "ai-bots",
        badge: "07",
        title: "بوتات ذكاء اصطناعي لموقعك",
        short: "بوتات AI مخصصة ترد على عملائك وتساعدهم داخل موقعك.",
        bullets: [
          "إعداد بوت ذكي يجيب عن أسئلة العملاء المتكررة.",
          "تدريب البوت على محتوى موقعك وخدماتك.",
          "دمج البوت في موقعك بشكل سلس وبدون تعقيد.",
        ],
      },
    ];
  }

  // English
  return [
    {
      id: "landing-pages",
      badge: "01",
      title: "Landing Pages",
      short: "High-converting marketing pages ready for ads.",
      bullets: [
        "Professional design aligned with your brand.",
        "Optimized for TikTok, Snapchat, Meta and more.",
        "Fast load times and simple user flow.",
      ],
    },
    {
      id: "ecommerce",
      badge: "02",
      title: "Online Stores",
      short: "Sales-ready e-commerce stores with payments and shipping.",
      bullets: [
        "Payment gateways and shipping tailored to your market.",
        "Simple admin panel to manage products and orders.",
        "Responsive design that works on all devices.",
      ],
    },
    {
      id: "websites",
      badge: "03",
      title: "Full Website Design",
      short: "Corporate, clinic, and startup websites end-to-end.",
      bullets: [
        "Clear information architecture to present your services.",
        "SEO-friendly content structure.",
        "Contact forms, maps, and WhatsApp CTA integration.",
      ],
    },
    {
      id: "systems",
      badge: "04",
      title: "Custom Business Systems",
      short: "Management systems for companies, stores and clinics.",
      bullets: [
        "Dashboards for clients, invoices, bookings, and more.",
        "Online or offline workflows depending on your needs.",
        "Architecture ready to grow with your business.",
      ],
    },
    {
      id: "marketing",
      badge: "05",
      title: "Digital Marketing",
      short: "Campaigns designed to reach the right audience at scale.",
      bullets: [
        "Campaign setup on the platforms that fit your market.",
        "Landing page optimizations to increase conversions.",
        "Simple reports focusing on the metrics that matter.",
      ],
    },
    {
      id: "branding",
      badge: "06",
      title: "Visual Identity & Branding",
      short: "Everything from logo to social media assets.",
      bullets: [
        "Modern, memorable logo design.",
        "Color and typography system aligned with your niche.",
        "Digital assets: cards, posts, covers, and more.",
      ],
    },
    {
      id: "ai-bots",
      badge: "07",
      title: "AI Bots for Your Website",
      short: "Custom AI assistants embedded directly into your site.",
      bullets: [
        "Chatbot that answers frequent customer questions.",
        "Trained on your website content and services.",
        "Smooth integration without disrupting your design.",
      ],
    },
  ];
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isArabic = locale === "ar";
  const services = getServices(locale);

  const align = isArabic ? "text-right" : "text-left";

  return (
    <section className="relative isolate py-12 md:py-16 bg-softodev-bg/70 overflow-hidden">
      {/* خلفية ناعمة متناسقة مع الهوم */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-softodev-primary/12 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-softodev-primarySoft/40 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-softodev-primary/40 to-transparent" />
      </div>

      <Container className="relative z-10 space-y-10 md:space-y-12">
        {/* Header */}
        <div
          className={`max-w-3xl ${align} space-y-3`}
          dir={isArabic ? "rtl" : "ltr"}
        >
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-softodev-muted">
            <span className="inline-block h-[1px] w-6 bg-softodev-primary/70" />
            <span>{isArabic ? "الخدمات" : "SERVICES"}</span>
          </p>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-softodev-text leading-tight">
            {isArabic ? (
              <>
                <span>خدمات برمجية وتسويقية </span>
                <span className="text-softodev-primary">تغطي رحلة مشروعك</span>
                <span> من الانطلاق إلى النمو.</span>
              </>
            ) : (
              <>
                <span>A complete service stack </span>
                <span className="text-softodev-primary">
                  for launching and growing
                </span>
                <span> your business.</span>
              </>
            )}
          </h1>

          <p className="text-sm md:text-[15px] leading-relaxed text-softodev-muted">
            {isArabic ? (
              <>
                يمكنك البدء من{" "}
                <span className="text-softodev-primary font-medium">
                  صفحة هبوط
                </span>{" "}
                واحدة،{" "}
                <span className="text-softodev-primary font-medium">
                  متجر إلكتروني
                </span>{" "}
                أو{" "}
                <span className="text-softodev-primary font-medium">
                  نظام إدارة
                </span>{" "}
                داخلي، ثم التوسع لاحقًا بنفس الفريق ونفس اللغة.
              </>
            ) : (
              <>
                Start with a single{" "}
                <span className="text-softodev-primary font-medium">
                  landing page
                </span>
                , a{" "}
                <span className="text-softodev-primary font-medium">
                  full online store
                </span>{" "}
                or{" "}
                <span className="text-softodev-primary font-medium">
                  internal system
                </span>{" "}
                — then expand later with the same team and style.
              </>
            )}
          </p>
        </div>

        {/* Services grid */}
        <div
          className="grid gap-5 md:gap-6 md:grid-cols-2 xl:grid-cols-3"
          dir={isArabic ? "rtl" : "ltr"}
        >
          {services.map((service) => (
            <article
              key={service.id}
              className="
                group relative h-full
                overflow-hidden rounded-[26px]
                border border-softodev-border/70
                bg-softodev-surface/95
                p-5 md:p-6
                shadow-soft
                transition-all duration-300
                hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(15,23,42,0.18)]
                hover:border-softodev-primary/45
              "
            >
              {/* شريط علوي ملون */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-softodev-primary via-softodev-primaryDark to-softodev-primary/80" />

              {/* glow overlay */}
              <div
                className="
                  pointer-events-none absolute inset-0 -z-10
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  bg-gradient-to-br from-softodev-primarySoft/70 via-softodev-surface/80 to-softodev-bg/90
                "
              />

              {/* Header داخل الكرت */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-softodev-muted">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-softodev-primarySoft text-[10px] text-softodev-primary">
                      {service.badge}
                    </span>
                    <span>
                      {isArabic ? "حل مُدار بالكامل" : "Done-for-you service"}
                    </span>
                  </div>
                  <h2 className="text-base md:text-lg font-extrabold text-softodev-text">
                    {service.title}
                  </h2>
                  <p className="text-xs md:text-sm text-softodev-muted leading-relaxed">
                    {service.short}
                  </p>
                </div>
              </div>

              {/* Bullets */}
              <ul className="mt-4 space-y-1.5 text-xs md:text-[13px] text-softodev-muted">
                {service.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-softodev-primary/85" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="mt-5 border-t border-softodev-border/70" />

              {/* CTA row – نسخة أخف للأزرار */}
              <div className="mt-3 flex flex-col gap-1.5">
                {/* زر أساسي أصغر */}
                <Link
                  href={`/${locale}/contact`}
                  className="
                    inline-flex items-center justify-center
                    self-start
                    rounded-full bg-softodev-primary
                    px-3 py-1.5
                    text-[11px] md:text-xs font-semibold text-white
                    shadow-soft
                    hover:bg-softodev-primaryDark
                    hover:shadow-[0_12px_30px_rgba(37,99,235,0.35)]
                    transition
                  "
                >
                  {isArabic
                    ? "اطلب هذه الخدمة"
                    : "Request this service"}
                  <span
                    className={
                      isArabic
                        ? "mr-1.5 text-[13px]"
                        : "ml-1.5 text-[13px]"
                    }
                  >
                    {isArabic ? "←" : "→"}
                  </span>
                </Link>

                {/* رابط واتساب خفيف كـ text-link */}
                <a
                  href={`https://wa.me/905015954826?text=${encodeURIComponent(
                    isArabic
                      ? `مرحباً SoftoDev، أريد خدمة: ${service.title}`
                      : `Hi SoftoDev, I’m interested in: ${service.title}`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`
                    inline-flex items-center gap-1.5
                    text-[11px] md:text-xs
                    ${
                      isArabic
                        ? "self-start text-softodev-muted"
                        : "self-start text-softodev-muted"
                    }
                    hover:text-softodev-primary
                    transition-colors
                  `}
                >
                  <span className="text-sm">💬</span>
                  <span>
                    {isArabic
                      ? "سؤال سريع على واتساب"
                      : "Quick question on WhatsApp"}
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
