# SoftoDev – دليل المطوّر لتحديث التصميم (UI Redesign Guide)

هذا الملف موجه لأي مطور سيستلم المشروع بعد الآن.

الهدف:  
تقدر **تغيّر شكل الموقع 100%** (تصميم، ألوان، تايبوغرافيا، layout)  
بدون ما تكسر:

- الراوت (URLs)
- الـ SEO
- تعدد اللغات (Arabic / English)
- الداتا الموجودة في `lib/*`

---

## 1. الفكرة العامة للمشروع

المشروع الآن عبارة عن:

- **منطق وراثة الصفحات + SEO + i18n جاهز**
- الواجهة الحالية مجرد **شكل بدائي (Wireframe)**:
  - ستايلات inline بسيطة
  - الهدف منها فقط: إثبات المنطق، وليس الشكل النهائي

مهم:  
مسموح لك تغيّر الشكل بالكامل، لكن **اتّبع القواعد** في الأقسام التالية.

---

## 2. أشياء ممنوع تغيّرها (ثابتة)

### 2.1 الراوت (Routes)

هذه المسارات **لا تغيّرها** ولا تغيّر أسماء الملفات اللي تولّدها:

- `/[locale]`
- `/[locale]/services`
- `/[locale]/services/[slug]`
- `/[locale]/pricing`
- `/[locale]/portfolio`
- `/[locale]/portfolio/[slug]`
- `/[locale]/about`
- `/[locale]/contact`

والمقابل في الملفات:

- `app/[locale]/page.tsx`
- `app/[locale]/services/page.tsx`
- `app/[locale]/services/[slug]/page.tsx`
- `app/[locale]/pricing/page.tsx`
- `app/[locale]/portfolio/page.tsx`
- `app/[locale]/portfolio/[slug]/page.tsx`
- `app/[locale]/about/page.tsx`
- `app/[locale]/contact/page.tsx`

> تقدر تغيّر محتوى هذه الملفات (JSX، ستايل، تقسيم السكشنات)،  
> لكن **لا تحذف الملفات ولا تغيّر مسارها**.

---

### 2.2 تعدد اللغات (i18n)

ملف اللغات:

- `lib/i18n/config.ts`

فيه:

- `export type Locale = "ar" | "en";`
- مصفوفة `locales = ["ar", "en"]`

لا تغيّر:

- أسماء اللغات الآن (`"ar"`, `"en"`)
- الباراميتر `locale` في `app/[locale]/layout.tsx` و صفحات `[locale]`

المهم في `app/[locale]/layout.tsx`:

```ts
const dir = locale === "ar" ? "rtl" : "ltr";
لا تمس هذا المنطق، لكن تقدر تغيّر داخل JSX نفسه (الـ HTML اللي يرجع).

2.3 SEO و Structured Data
لا تحذف أو تكسر:

generateMetadata في كل صفحة

app/sitemap.ts

app/robots.ts

سكربتات JSON-LD داخل:

app/[locale]/services/[slug]/page.tsx

app/[locale]/portfolio/[slug]/page.tsx

مسموح:

تعدّل النصوص (title/description) لو عدّلت محتوى الصفحة
لكن:

خَلِّ استخدام getCanonicalUrl(locale, "…") كما هو

لا تحذف الأقسام الخاصة بـ openGraph و twitter

2.4 الداتا في lib/*
لدينا 3 ملفات داتا رئيسية:

lib/services.ts

lib/pricing.ts

lib/portfolio.ts

فيها:

Arrays فيها البيانات (العربي/الإنجليزي)

دوال مثل:

getServicesForLocale(locale)

getServiceBySlug(slug, locale)

getPricingForLocale(locale)

getProjectsForLocale(locale)

getProjectBySlug(slug, locale)

مهم:

لا تغيّر أسماء هذه الدوال.

لا تغيّر نوع الباراميتر locale.

لا تغيّر قيمة slug (مثل "landing-pages", "ecommerce-stores", إلخ)
لأن هذه الـ slugs مستخدمة في:

الراوت

الـ sitemap

مسموح:

تضيف حقول جديدة للبنود (مثلاً: صور، روابط إضافية، tags).

تحسّن النصوص الموجودة.

3. أشياء تقدر تغيّرها بحرية (المسموح)
هذه الأشياء مفتوحة بالكامل للتعديل:

التصميم (Design):

الألوان

الـ typography

الـ spacing

الـ layout (grid, flex, sections)

طريقة كتابة الستايل:

تقدر:

تحذف الـ inline styles

تدخل TailwindCSS

أو تستخدم CSS Modules / styled-components / أي نظام يعجبك

المكوّنات (Components):

تقدر تعيد بناء:

SiteHeader

SiteFooter

FloatingActions

Container

components/home/*

بس خَلِّ props الأساسية نفسها (مثلاً locale).

تقسيم الصفحات إلى سكشنات:

مثلاً:

تنقل أجزاء من app/[locale]/page.tsx إلى مكوّنات داخل components/home/…

تنشئ HomeHero, HomeServices, HomeCTA إلخ.

4. خطة عمل بسيطة للمطور الجديد
خطوة 1 – استيعاب المشروع
شغّل المشروع:

bash
Copy code
npm install
npm run dev
جرّب الصفحات:

/ar

/en

/ar/services + صفحة خدمة

/ar/pricing

/ar/portfolio + صفحة مشروع

/ar/about

/ar/contact

تأكد أن كل شيء يفتح بدون أخطاء.

خطوة 2 – إدخال Tailwind (أو نظام تصميم)
لو اخترت TailwindCSS (مو مفروض، لكن هو المقترح):

أضف ملفات الإعداد (tailwind.config, postcss.config, تعديل globals.css).

عرّف في Tailwind:

ألوان SoftoDev (primary, secondary, background, surface, text)

أحجام الخطوط (text-sm, text-base, text-lg,…)

المسافات (px → Tailwind spacing)

نصيحة: خَلّ التصميم الجديد يبدأ من ملفات Layout + Components
قبل ما تغيّر كل الصفحات.

خطوة 3 – إعادة تصميم الـ Layout (هيدر + فوتر + أزرار عائمة)
SiteHeader (components/layout/site-header.tsx):

حافظ على:

روابط: Services, Pricing, Portfolio, About, Contact

سويتش اللغة AR / EN

غيّر:

الشكل بالكامل (Navbar مودرن، لوجو، Mobile Menu، إلخ)

SiteFooter (components/layout/site-footer.tsx):

حافظ على:

روابط الصفحات

واتساب + إيميل

صمّم:

فوتر احترافي، ربما 2–3 أعمدة، أو شكل بسيط أنيق.

FloatingActions (components/layout/floating-actions.tsx):

حافظ على:

رابط WhatsApp

رابط tel:

غيّر:

شكل الأزرار (دوائر، أيقونات، مكان الظهور “يمين/أسفل”…).

خطوة 4 – إعادة تصميم الصفحات واحدة واحدة
ترتيب مقترح:

Home (app/[locale]/page.tsx):

صمّم:

Hero قوي + CTA

Section للخدمات (ملخّص)

Section للأسعار (Teaser)

Section للأعمال (Teaser)

استخدم مكوّنات من:

components/home/*

أو أنشئ مكوّنات جديدة.

Services:

صفحة /services:

Grid جميلة للخدمات.

صفحة /services/[slug]:

صفحة هبوط SEO ممتازة (محتوى، قائمة نقاط، FAQ مختصرة، CTA).

Pricing (/pricing):

3 باقات واضحة:

Starter / Growth / Pro

CTA → واتساب أو Contact.

Portfolio:

/portfolio:

Grid نظيفة تعرض المشاريع.

/portfolio/[slug]:

صفحة فيها تفاصيل (الهدف، الحل، النتيجة، التقنيات، CTA).

About & Contact:

About: قسم تعريفي + قيم + من تخدم + CTA.

Contact: فورم مرتب + بيانات التواصل في جانب أو تحتها.

خطوة 5 – التأكد قبل أي Merge / Push
قبل تعتمد التغييرات:

بناء المشروع:

bash
Copy code
npm run build
لازم يمر بدون Errors.

تشييك الصفحات يدويًا (AR/EN).

التأكد من الـ SEO الأساسي:

view-source: أو DevTools:

<title> مناسب

<meta name="description"> موجود

افتح:

/sitemap.xml

/robots.txt

تأكد من عدم وجود أخطاء في Console المتصفح.

5. ملاحظات مهمة عن Client Components
حاليًا أغلب الصفحات Server Components.
لو تبغى تسوي Interactivity (state, onClick, onSubmit, إلخ):

أنشئ مكوّن جديد:

tsx
Copy code
"use client";

type ExampleProps = { locale: Locale };

export function ExampleClientComponent({ locale }: ExampleProps) {
  // هنا الشغل التفاعلي
}
استعمله داخل صفحة Server:

tsx
Copy code
export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <ExampleClientComponent locale={locale} />;
}
لا تضع onSubmit, onClick, … مباشرة في JSX داخل Server Component.

باختصار:

ثابت: الراوت، اللغات، دوال lib/*, الـ SEO الأساسي.

متحرك: كل ما يخص التصميم والستايل وتقسيم المكوّنات الداخلية.

إذا التزمت بهذه القواعد، تقدر تبني واجهة جديدة بالكامل بدون ما تكسر المنطق أو الـ SEO أو تجربة المستخدم.

yaml
Copy code

---

لو حاب، أقدر بعد هذا أكتب لك **Plan بسيط من 5 خطوات للمطوّر** في سطرين تحطه في بداية `update.md` كـ TL;DR، بس أول شي تأكد إن هذا الشرح صار واضح بالنسبة لك.
::contentReference[oaicite:0]{index=0}




