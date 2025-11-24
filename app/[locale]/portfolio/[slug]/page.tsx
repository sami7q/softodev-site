// app/[locale]/portfolio/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import { getCanonicalUrl } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import Link from "next/link";

const projectSlugs = ["clinic-system", "landing-campaign", "store-launch"] as const;
type ProjectSlug = (typeof projectSlugs)[number];

type LocalizedProject = {
  slug: ProjectSlug;
  name: { ar: string; en: string };
  shortDescription: { ar: string; en: string };
  industry: { ar: string; en: string };
  region: { ar: string; en: string };
  stack: { ar: string; en: string };
  context: { ar: string; en: string };
  solution: { ar: string; en: string };
  results: { ar: string; en: string };
};

const projects: Record<ProjectSlug, LocalizedProject> = {
  "clinic-system": {
    slug: "clinic-system",
    name: {
      ar: "نظام إدارة عيادة متكامل",
      en: "Complete Clinic Management System",
    },
    shortDescription: {
      ar: "نظام لإدارة المرضى، المواعيد، الفواتير، والتقارير في عيادة واحدة.",
      en: "A system to manage patients, appointments, invoices, and reports for a single clinic.",
    },
    industry: { ar: "القطاع الطبي", en: "Healthcare" },
    region: { ar: "العراق", en: "Iraq" },
    stack: {
      ar: "Django / PostgreSQL / Tailwind / HTMX",
      en: "Django / PostgreSQL / Tailwind / HTMX",
    },
    context: {
      ar: "العيادة كانت تعتمد على الإكسل والورق لمتابعة المواعيد والفواتير، مما سبب فوضى وتأخير في خدمة المرضى.",
      en: "The clinic relied on spreadsheets and paper to track appointments and invoices, causing confusion and slow service.",
    },
    solution: {
      ar: "قمنا ببناء نظام عيادة متكامل يربط الاستقبال مع الطبيب والفواتير والتقارير، مع واجهة بسيطة وسهلة للموظفين.",
      en: "We developed a complete clinic system connecting reception, doctor, billing, and reports in one simple interface.",
    },
    results: {
      ar: "انخفض وقت تسجيل المريض الجديد، أصبح الاطلاع على التاريخ الطبي أسهل، وتم تنظيم الفواتير والتقارير اليومية.",
      en: "New patient registration time decreased, medical history became easier to access, and billing/reporting were organized.",
    },
  },
  "landing-campaign": {
    slug: "landing-campaign",
    name: {
      ar: "صفحة هبوط لحملة إعلانات",
      en: "Landing page for ad campaign",
    },
    shortDescription: {
      ar: "صفحة هبوط مخصصة لحملة مدفوعة تستهدف جمهور الخليج.",
      en: "Custom landing page for a paid campaign targeting GCC users.",
    },
    industry: { ar: "تسويق رقمي", en: "Digital marketing" },
    region: { ar: "السعودية", en: "KSA" },
    stack: {
      ar: "Next.js / TailwindCSS",
      en: "Next.js / TailwindCSS",
    },
    context: {
      ar: "العميل أراد صفحة واحدة واضحة ومباشرة لحملة إعلانات على سناب وإنستغرام، مع تركيز على جمع الطلبات عبر الواتساب.",
      en: "The client needed a single clear page for Snapchat and Instagram ads, focused on collecting orders through WhatsApp.",
    },
    solution: {
      ar: "تم تصميم صفحة هبوط خفيفة وسريعة مع أقسام مرتبة (العرض، الفوائد، آراء العملاء، أسئلة شائعة، CTA واضح للواتساب).",
      en: "We designed a fast, lightweight landing page with structured sections (offer, benefits, social proof, FAQ, clear WhatsApp CTA).",
    },
    results: {
      ar: "تم تحسين نسبة النقر إلى الواتساب، وأصبح العميل يدير الحملة بشكل أوضح مع صفحة واحدة مخصصة.",
      en: "Click-through to WhatsApp improved, and the client managed the campaign more clearly around a single focused page.",
    },
  },
  "store-launch": {
    slug: "store-launch",
    name: {
      ar: "إطلاق متجر إلكتروني لبراند ناشئ",
      en: "Launching an online store for a new brand",
    },
    shortDescription: {
      ar: "متجر بسيط لبيع المنتجات في الخليج مع إمكانية التوسع مستقبلاً.",
      en: "Simple online store for selling products across the GCC with room to grow.",
    },
    industry: { ar: "تجارة إلكترونية", en: "E-commerce" },
    region: { ar: "الإمارات", en: "UAE" },
    stack: {
      ar: "Next.js / TailwindCSS / API جاهز للتوسعة",
      en: "Next.js / TailwindCSS / API-ready backend",
    },
    context: {
      ar: "البراند أراد بداية سريعة لمتجر بسيط قبل الاستثمار في حلول معقدة أو مكلفة.",
      en: "The brand wanted a fast way to start selling without investing in complex or expensive platforms.",
    },
    solution: {
      ar: "بُنِي متجر بسيط بواجهة نظيفة وتجربة شراء سلسة، مع بنية برمجية تسمح بالربط لاحقاً مع بوابات الدفع وأنظمة إدارة.",
      en: "We built a simple store with a clean interface and smooth checkout, with architecture ready for payment and management integrations later.",
    },
    results: {
      ar: "تم إطلاق المتجر خلال فترة قصيرة، وبدأ البراند ببيع المنتجات فعلياً مع إمكانية تطوير المتجر مع نمو المبيعات.",
      en: "The store launched quickly, enabling real sales while keeping the option open for future expansion.",
    },
  },
};

export async function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: ProjectSlug }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = projects[slug];

  if (!project) return {};

  const title =
    locale === "ar"
      ? `${project.name.ar} | أعمال SoftoDev`
      : `${project.name.en} | SoftoDev Portfolio`;

  const description = project.shortDescription[locale];
  const url = getCanonicalUrl(locale, `/portfolio/${slug}`);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { title, description },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: ProjectSlug }>;
}) {
  const { locale, slug } = await params;
  const isArabic = locale === "ar";
  const align = isArabic ? "text-right" : "text-left";
  const justify = isArabic ? "justify-end" : "justify-start";

  const project = projects[slug];
  if (!project) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Project",
    name: project.name[locale],
    description: project.shortDescription[locale],
    areaServed: project.region.en,
    industry: project.industry.en,
    creator: {
      "@type": "Organization",
      name: "SoftoDev",
    },
  };

  return (
    <>
      {/* Page wrapper with premium background */}
      <section className="relative isolate py-12 md:py-16 bg-softodev-bg/60 backdrop-blur-sm overflow-hidden">
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-softodev-primary/12 blur-3xl" />
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-sky-400/12 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-softodev-primary/40 to-transparent" />
        </div>

        <Container className="relative z-10 space-y-10 md:space-y-12">
          {/* Hero */}
          <div className={`space-y-4 ${align}`}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-softodev-muted">
              {isArabic ? "دراسة حالة" : "Case study"}
            </p>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-softodev-text leading-tight">
              {project.name[locale]}
            </h1>

            <p className="max-w-2xl text-base md:text-[15px] leading-relaxed text-softodev-muted">
              {project.shortDescription[locale]}
            </p>

            {/* Tags */}
            <div className={`flex flex-wrap gap-3 text-[11px] text-softodev-muted ${justify}`}>
              <span className="inline-flex items-center rounded-full bg-softodev-primarySoft/90 px-3 py-1 font-bold text-softodev-primary border border-softodev-border">
                {project.industry[locale]}
              </span>
              <span className="inline-flex items-center rounded-full border border-softodev-border bg-softodev-surface/90 px-3 py-1 font-semibold">
                {project.region[locale]}
              </span>
              <span className="inline-flex items-center rounded-full border border-softodev-border bg-softodev-surface/90 px-3 py-1 font-semibold">
                {project.stack[locale]}
              </span>
            </div>

            {/* CTAs */}
            <div className={`flex flex-wrap gap-3 ${justify}`}>
              <a
                href="https://wa.me/905015954826"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-softodev-primary to-blue-700 px-5 py-2 text-xs md:text-sm font-bold text-white shadow-soft hover:opacity-95 transition active:scale-[0.98]"
              >
                {isArabic
                  ? "ناقشنا مشروعاً مشابهاً لمشروعك"
                  : "Discuss a similar project for your business"}
              </a>

              <Link
                href={isArabic ? "/ar/portfolio" : "/en/portfolio"}
                className="inline-flex items-center rounded-full border border-softodev-border bg-softodev-surface/90 px-5 py-2 text-xs md:text-sm font-bold text-softodev-text hover:border-softodev-primary/40 transition"
              >
                {isArabic ? "العودة إلى الأعمال" : "Back to portfolio"}
              </Link>
            </div>
          </div>

          {/* Layout */}
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)]">
            {/* Narrative */}
            <div className={`space-y-4 ${align}`}>
              <div className="rounded-3xl border border-softodev-border bg-softodev-surface/90 p-6 shadow-soft transition hover:border-softodev-primary/30">
                <h2 className="text-base font-bold text-softodev-text">
                  {isArabic ? "الخلفية" : "Background"}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-softodev-muted">
                  {project.context[locale]}
                </p>
              </div>

              <div className="rounded-3xl border border-softodev-border bg-softodev-surface/90 p-6 shadow-soft transition hover:border-softodev-primary/30">
                <h2 className="text-base font-bold text-softodev-text">
                  {isArabic ? "الحل" : "Solution"}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-softodev-muted">
                  {project.solution[locale]}
                </p>
              </div>

              <div className="rounded-3xl border border-softodev-border bg-softodev-surface/90 p-6 shadow-soft transition hover:border-softodev-primary/30">
                <h2 className="text-base font-bold text-softodev-text">
                  {isArabic ? "النتائج" : "Results"}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-softodev-muted">
                  {project.results[locale]}
                </p>
              </div>
            </div>

            {/* Side meta */}
            <div className={`space-y-4 ${align}`}>
              <div className="rounded-3xl border border-softodev-border bg-softodev-bg/70 p-6 text-sm text-softodev-muted shadow-soft">
                <h3 className="text-base font-bold text-softodev-text">
                  {isArabic ? "نبذة سريعة عن المشروع" : "Quick project facts"}
                </h3>

                <dl className={`mt-4 space-y-3 ${align}`}>
                  <div>
                    <dt className="font-bold text-softodev-text">
                      {isArabic ? "القطاع" : "Industry"}
                    </dt>
                    <dd className="mt-1">{project.industry[locale]}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-softodev-text">
                      {isArabic ? "المنطقة" : "Region"}
                    </dt>
                    <dd className="mt-1">{project.region[locale]}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-softodev-text">
                      {isArabic ? "التقنيات" : "Tech stack"}
                    </dt>
                    <dd className="mt-1">{project.stack[locale]}</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-3xl border border-dashed border-softodev-border bg-softodev-surface/80 p-6 text-sm text-softodev-muted shadow-soft">
                {isArabic
                  ? "يمكن تنفيذ مشروع مشابه لهذا المشروع مع تخصيص الهوية البصرية، اللغة، وطريقة العمل حسب نشاطك ورؤية مشروعك."
                  : "We can build a similar project customized to your brand, language, and workflow for your business."}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* JSON-LD (unchanged) */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
