// app/[locale]/page.tsx
import { Container } from "@/components/layout/container";
import type { Locale } from "@/lib/i18n/config";

export default async function HomePage({
  params,
}: {
  // 🔥 هنا أيضًا params صار Promise
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params; // ✅ نفك الـ Promise
  const isArabic = locale === "ar";

  return (
    <section className="py-16">
      <Container className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {isArabic ? "شركة برمجة مواقع ومتاجر" : "Web & Software Agency"}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {isArabic
              ? "نبني مواقع ومتاجر إلكترونية سريعة ومخصصة لسوق الخليج والعراق"
              : "We build fast, modern websites and stores for the GCC & Iraq market."}
          </h1>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            {isArabic
              ? "SoftoDev متخصصة في تطوير صفحات هبوط، متاجر إلكترونية، وأنظمة إدارة مخصصة تساعدك على إطلاق مشروعك بسرعة وبجودة عالية."
              : "SoftoDev specializes in landing pages, e-commerce stores, and custom management systems to help you launch fast with high quality."}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/905015954826"
              className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
            >
              {isArabic ? "تواصل عبر الواتساب" : "Chat on WhatsApp"}
            </a>
            <a
              href={isArabic ? "/ar/services" : "/en/services"}
              className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              {isArabic ? "شاهد خدماتنا" : "View Services"}
            </a>
          </div>
        </div>

        <div className="relative">
          {/* Placeholder illustration – بنبدله لاحقًا بالديزاين الحقيقي */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 h-3 w-20 rounded-full bg-slate-200" />
            <div className="mb-3 h-6 w-40 rounded bg-slate-100" />
            <div className="mb-6 h-4 w-full rounded bg-slate-100" />
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="h-24 rounded-xl bg-slate-100" />
              <div className="h-24 rounded-xl bg-slate-100" />
              <div className="h-24 rounded-xl bg-slate-100" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
