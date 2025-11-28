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
    <section className="relative isolate py-12 md:py-16 bg-softodev-bg/60 overflow-hidden">
      {/* خلفية خفيفة */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-softodev-primary/10 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-softodev-primary/40 to-transparent" />
      </div>

      <Container className="relative z-10 space-y-10 md:space-y-12">
        {/* Header */}
        <div className={`max-w-3xl ${align} space-y-3`}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-softodev-muted">
            {isArabic ? "الخدمات" : "Services"}
          </p>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-softodev-text leading-tight">
            {isArabic
              ? "خدمات برمجية وتسويقية متكاملة لمرحلة الانطلاق والنمو."
              : "A complete service stack for launching and growing your business."}
          </h1>

          <p className="text-sm md:text-[15px] leading-relaxed text-softodev-muted">
            {isArabic
              ? "سواء كنت تحتاج صفحة هبوط واحدة، متجرًا إلكترونيًا كاملاً، نظام إدارة داخلي، أو حتى بوت ذكاء اصطناعي يخدم عملاءك – يمكنك البدء من أي خدمة ثم التوسع لاحقًا."
              : "Whether you need a single landing page, a full online store, an internal management system, or an AI bot for your customers — you can start with one service and expand later."}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-5 md:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-3xl border border-softodev-border/70 bg-softodev-surface/95 p-5 md:p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg hover:border-softodev-primary/40"
            >
              {/* subtle glow */}
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-softodev-primarySoft/60 via-softodev-surface/80 to-softodev-bg/80" />

              <div className="flex items-start justify-between gap-3">
                <div className={`space-y-2 ${align}`}>
                  <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-softodev-muted">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-softodev-primarySoft text-[10px] text-softodev-primary">
                      {service.badge}
                    </span>
                    <span>
                      {isArabic ? "خدمة" : "Service"}
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

              <ul
                className={`mt-4 space-y-1.5 text-xs md:text-[13px] text-softodev-muted ${align}`}
              >
                {service.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span
                      className={`mt-[5px] h-1.5 w-1.5 rounded-full bg-softodev-primary/80 flex-shrink-0 ${
                        isArabic ? "ml-1" : "mr-1"
                      }`}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className={`mt-5 flex justify-between items-center gap-3 ${align}`}>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center text-[11px] md:text-xs font-semibold text-softodev-primary hover:text-softodev-primaryDark transition"
                >
                  {isArabic
                    ? "اطلب عرض سعر لهذه الخدمة"
                    : "Request a quote for this service"}
                  <span
                    className={`inline-block text-[13px] ${
                      isArabic ? "mr-1 group-hover:-translate-x-0.5" : "ml-1 group-hover:translate-x-0.5"
                    } transition-transform`}
                  >
                    {isArabic ? "←" : "→"}
                  </span>
                </Link>

                <a
                  href={`https://wa.me/905015954826?text=${encodeURIComponent(
                    isArabic
                      ? `مرحباً SoftoDev، أريد خدمة: ${service.title}`
                      : `Hi SoftoDev, I’m interested in: ${service.title}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-softodev-border bg-softodev-bg/80 px-3 py-1.5 text-[11px] md:text-xs text-softodev-text hover:border-softodev-primary/60 hover:bg-softodev-primarySoft/40 transition"
                >
                  {isArabic ? "سؤال سريع على واتساب" : "Quick question on WhatsApp"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
