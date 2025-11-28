// app/[locale]/services/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import { getCanonicalUrl } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import Link from "next/link";

const serviceSlugs = [
  "landing-pages",
  "ecommerce",
  "websites",
  "systems",
  "marketing",
  "branding",
  "ai-bots",
] as const;

type ServiceSlug = (typeof serviceSlugs)[number];

type FAQItem = {
  q: string;
  a: string;
};

type LocalizedService = {
  slug: ServiceSlug;
  name: { ar: string; en: string };
  shortDescription: { ar: string; en: string };
  audience: { ar: string; en: string };
  benefits: { ar: string[]; en: string[] };
  process: { ar: string[]; en: string[] };
  faq: { ar: FAQItem[]; en: FAQItem[] };
};

const services: Record<ServiceSlug, LocalizedService> = {
  "landing-pages": {
    slug: "landing-pages",
    name: {
      ar: "صفحات الهبوط",
      en: "Landing pages",
    },
    shortDescription: {
      ar: "نصمّم صفحات هبوط سريعة وجاهزة للإعلانات مع تركيز على تحويل الزوار إلى عملاء.",
      en: "We design fast, conversion-focused landing pages ready for your ad campaigns.",
    },
    audience: {
      ar: "أصحاب المنتجات، الخدمات، الدورات، أو أي عرض يحتاج صفحة واحدة قوية وواضحة.",
      en: "Product owners, service providers, course creators, and anyone selling with a single focused offer.",
    },
    benefits: {
      ar: [
        "تصميم صفحة هبوط مخصصة لهويتك البصرية (ألوان، خطوط، شعار).",
        "هيكل صفحة مدروس: Hero، الفوائد، الإثبات الاجتماعي، أسئلة شائعة، زر دعوة للإجراء واضح.",
        "تهيئة تقنية للسرعة وتجربة المستخدم على الجوال.",
        "إمكانية الربط مع واتساب، فورم تواصل، أو أدوات تتبع التحويل.",
      ],
      en: [
        "Custom landing page design aligned with your brand (colors, typography, logo).",
        "Thoughtful page structure: hero, benefits, social proof, FAQ, and a clear CTA.",
        "Technical optimization for speed and mobile-first experience.",
        "Ability to connect with WhatsApp, contact forms, or conversion tracking tools.",
      ],
    },
    process: {
      ar: [
        "جلسة تعريفية لفهم هدف الحملة والجمهور المستهدف في الخليج أو العراق.",
        "كتابة هيكل المحتوى وترتيب الأقسام بناءً على هدف التحويل.",
        "تصميم الصفحة وتجربتها على الموبايل والكمبيوتر.",
        "تنفيذ التعديلات الأخيرة ثم إطلاق الصفحة وربطها مع حملات الإعلان.",
      ],
      en: [
        "Kickoff call to understand your campaign goal and target audience in the GCC or Iraq.",
        "Plan the content structure and sections with a focus on conversions.",
        "Design and implement the page optimized for mobile and desktop.",
        "Final tweaks, launch, and connection with your ad campaigns.",
      ],
    },
    faq: {
      ar: [
        {
          q: "كم يستغرق تنفيذ صفحة الهبوط؟",
          a: "غالباً من 2 إلى 5 أيام عمل حسب جاهزية المحتوى (الصور، النصوص، الهوية البصرية).",
        },
        {
          q: "هل صفحة الهبوط مناسبة لحملات سناب وتيك توك؟",
          a: "نعم، نجهز الصفحة لتكون سريعة ومباشرة ومتوافقة مع زوار الجوال مع زر واتساب أو نموذج واضح.",
        },
        {
          q: "هل يمكن تعديل الصفحة لاحقاً؟",
          a: "نعم، نبني الصفحة بهيكل منظم يسمح بالتعديل والتطوير لاحقاً بدون إعادة البناء من الصفر.",
        },
      ],
      en: [
        {
          q: "How long does a landing page take?",
          a: "Typically 2–5 business days depending on how ready your content is (copy, images, brand assets).",
        },
        {
          q: "Is the landing page good for Snapchat and TikTok ads?",
          a: "Yes, we design it to be fast, mobile-first and focused on a single clear CTA (WhatsApp or a lead form).",
        },
        {
          q: "Can we update the landing page later?",
          a: "Yes, we keep the structure clean so you can iterate without rebuilding from scratch.",
        },
      ],
    },
  },

  ecommerce: {
    slug: "ecommerce",
    name: {
      ar: "متاجر إلكترونية",
      en: "Online stores",
    },
    shortDescription: {
      ar: "نبني متاجر إلكترونية جاهزة للبيع مع تجربة استخدام سهلة وإمكانية ربط بوابات الدفع.",
      en: "We build online stores optimized for sales, with smooth UX and payment integration-ready.",
    },
    audience: {
      ar: "البراندات، المتاجر الناشئة، والمشاريع التي تبيع منتجات متعددة في الخليج والعراق.",
      en: "Brands, new stores, and businesses selling multiple products in the GCC and Iraq.",
    },
    benefits: {
      ar: [
        "تصميم متجر احترافي متوافق مع الهوية البصرية للبراند.",
        "هيكلة أقسام ومنتجات منظمة لسهولة التصفح والشراء.",
        "متجر جاهز للربط مع بوابات الدفع وأنظمة الشحن المناسبة لاحقاً.",
        "تركيز على السرعة وسهولة إكمال الطلب من الموبايل.",
      ],
      en: [
        "Professional, responsive storefront tailored to your brand.",
        "Organized categories and product structure for easy browsing.",
        "Store prepared for payment gateway and shipping integrations.",
        "Focus on speed and a smooth mobile checkout experience.",
      ],
    },
    process: {
      ar: [
        "فهم نوع المنتجات وطريقة البيع الحالية (إنستغرام، واتساب، وغيرها).",
        "تحديد أقسام المتجر وبنية المنتجات الرئيسية.",
        "تصميم صفحة المتجر، صفحة المنتج، وعملية السلة والدفع.",
        "تسليم المتجر مع شرح مبسط لإدارة المنتجات والطلبات.",
      ],
      en: [
        "Understand your products and current sales channels (Instagram, WhatsApp, etc.).",
        "Define categories and main product structure for the store.",
        "Design the storefront, product page, and checkout flow.",
        "Deliver the store and walk you through managing products and orders.",
      ],
    },
    faq: {
      ar: [
        {
          q: "هل يمكن ربط المتجر ببوابة دفع لاحقاً؟",
          a: "نعم، نبني المتجر ببنية تسمح بربط بوابات دفع لاحقاً حسب بلدك وخدمتك المفضلة.",
        },
        {
          q: "هل يمكن التوسع بعد فترة؟",
          a: "نعم، يمكن إضافة منتجات جديدة، أقسام، أو ميزات مثل كوبونات الخصم مع نمو المتجر.",
        },
        {
          q: "هل المتجر مناسب لسوق الخليج؟",
          a: "نعم، نراعي اللغة العربية، أسلوب العرض، وتجربة العميل في الخليج والعراق.",
        },
      ],
      en: [
        {
          q: "Can we integrate a payment gateway later?",
          a: "Yes, we prepare the store so it can be connected to common payment gateways in your region.",
        },
        {
          q: "Can we scale the store over time?",
          a: "Yes, you can add more products, categories, and features (like discount codes) as you grow.",
        },
        {
          q: "Is the store optimized for GCC customers?",
          a: "Yes, we design with Arabic content, mobile behavior, and GCC expectations in mind.",
        },
      ],
    },
  },

  websites: {
    slug: "websites",
    name: {
      ar: "تصميم مواقع كاملة",
      en: "Full website design",
    },
    shortDescription: {
      ar: "مواقع تعريفية للشركات والعيادات والمشاريع الناشئة تعكس صورتك بشكل احترافي.",
      en: "Full corporate, clinic, and startup websites that present your brand clearly.",
    },
    audience: {
      ar: "الشركات، العيادات، والمشاريع التي تحتاج موقعاً تعريفياً منظماً وواضحاً.",
      en: "Companies, clinics, and startups needing a clear, structured website.",
    },
    benefits: {
      ar: [
        "هيكل صفحات منظم يعرض من أنتم، ماذا تقدمون، ولماذا أنتم مختلفون.",
        "تصميم متجاوب يعمل بسلاسة على الجوال والكمبيوتر.",
        "دمج نماذج تواصل، خرائط، أزرار واتساب، وأقسام الأسئلة الشائعة.",
        "تهيئة أساسية لمحركات البحث (SEO) من ناحية العناوين والبنية.",
      ],
      en: [
        "Structured pages explaining who you are, what you offer, and why you’re different.",
        "Responsive design that works smoothly on mobile and desktop.",
        "Contact forms, maps, WhatsApp CTA, and FAQ sections integrated.",
        "Baseline SEO setup for titles, structure, and content.",
      ],
    },
    process: {
      ar: [
        "تحديد أهداف الموقع الرئيسية (تعريف، حجز، مبيعات، توجيه للواتساب...).",
        "اقتراح هيكل الصفحات الرئيسية والأقسام الداخلية.",
        "تصميم وتنفيذ الصفحات مع مراجعة المحتوى.",
        "مراجعة نهائية ثم إطلاق الموقع مع إرشادات مبسطة للتعديل لاحقاً.",
      ],
      en: [
        "Define the primary goals of the website (inform, book, sell, direct to WhatsApp, etc.).",
        "Propose a site map and main page structures.",
        "Design and implement the pages with reviewed content.",
        "Final review and launch, plus a quick walkthrough on how to update content.",
      ],
    },
    faq: {
      ar: [
        {
          q: "هل توفرون محتوى نصّي للموقع؟",
          a: "يمكننا مساعدتك في ترتيب وصياغة المحتوى، لكن يفضل أن تزودنا بالمعلومات الأساسية عن نشاطك.",
        },
        {
          q: "هل يمكن إضافة صفحات جديدة لاحقاً؟",
          a: "نعم، يتم بناء الموقع بحيث يمكن إضافة صفحات وأقسام جديدة بسهولة.",
        },
      ],
      en: [
        {
          q: "Do you help with website copy?",
          a: "We can help structure and refine the copy, but you provide the core information about your business.",
        },
        {
          q: "Can we add more pages later?",
          a: "Yes, the site is built so you can add new pages and sections over time.",
        },
      ],
    },
  },

  systems: {
    slug: "systems",
    name: {
      ar: "أنظمة برمجية للشركات والعيادات",
      en: "Custom business systems",
    },
    shortDescription: {
      ar: "نطوّر أنظمة إدارة مخصصة لسير عملك (مواعيد، فواتير، مخزون، تقارير...) بدل الاعتماد على الإكسل.",
      en: "We build custom management systems around your workflow (appointments, invoices, inventory, reports…).",
    },
    audience: {
      ar: "العيادات، الشركات، المتاجر، والمرافق التي تحتاج نظاماً منظماً بدل الملفات المتفرقة.",
      en: "Clinics, businesses, and stores that need a proper system instead of scattered files.",
    },
    benefits: {
      ar: [
        "نظام إدارة مخصص لعملك، وليس قالباً عاماً.",
        "صلاحيات مختلفة للمستخدمين (مدير، موظف، طبيب، محاسب...).",
        "تقارير تساعدك على فهم الإيرادات، المصاريف، والحركة اليومية.",
        "إمكانية التوسع لاحقاً بإضافة وحدات جديدة أو ربط مع أنظمة أخرى.",
      ],
      en: [
        "A management system tailored to your operations, not a generic template.",
        "Role-based access for users (admin, staff, doctors, accountants, etc.).",
        "Reports to help you understand revenue, costs, and daily activity.",
        "Ability to expand later with new modules or integrations.",
      ],
    },
    process: {
      ar: [
        "جلسة تحليل لعملية العمل الحالية وتحديد المشاكل والفرص.",
        "رسم تدفق البيانات والشاشات المطلوبة في النظام.",
        "تطوير نسخة أولية (MVP) للتجربة الداخلية.",
        "تنفيذ التحسينات والإضافات بناءً على الاستخدام الفعلي.",
      ],
      en: [
        "Analysis session to understand your current workflow and pain points.",
        "Map data flows and define the screens needed in the system.",
        "Develop an MVP version and test it internally with your team.",
        "Refine and extend based on real usage and feedback.",
      ],
    },
    faq: {
      ar: [
        {
          q: "هل النظام يكون مخصصاً بالكامل؟",
          a: "نعم، نركز على بناء نظام يناسب طريقة عملك بدلاً من إجبارك على التكيف مع برنامج جاهز.",
        },
        {
          q: "هل يمكن العمل بدون إنترنت؟",
          a: "يمكن تصميم النظام ليعمل أونلاين أو أوفلاين حسب احتياجك وطبيعة العمل.",
        },
      ],
      en: [
        {
          q: "Is the system fully custom?",
          a: "Yes, it’s designed around your workflow instead of forcing you into a generic product.",
        },
        {
          q: "Can it work offline?",
          a: "We can design the system to work online or offline, depending on your needs.",
        },
      ],
    },
  },

  marketing: {
    slug: "marketing",
    name: {
      ar: "خدمات التسويق الرقمي",
      en: "Digital marketing services",
    },
    shortDescription: {
      ar: "حملات إعلانية مدروسة للوصول لأكبر شريحة جمهور ممكنة مع صفحات هبوط جاهزة.",
      en: "Strategic digital campaigns to reach the right audience, paired with strong landing pages.",
    },
    audience: {
      ar: "المشاريع التي تريد زيادة الاستفسارات أو المبيعات عبر الإعلانات المدفوعة.",
      en: "Businesses looking to increase leads or sales through paid ads.",
    },
    benefits: {
      ar: [
        "تحديد القنوات الأنسب لسوقك (سناب، تيك توك، إنستغرام، جوجل...).",
        "تحسين صفحة الهبوط أو الموقع لرفع نسبة التحويل.",
        "تقارير تركّز على الأرقام المهمة بعيداً عن التعقيد.",
      ],
      en: [
        "Select the right platforms for your market (Snapchat, TikTok, Instagram, Google…).",
        "Optimize your website or landing page for higher conversions.",
        "Reports focused on the key metrics, without unnecessary complexity.",
      ],
    },
    process: {
      ar: [
        "فهم هدف الحملة (مبيعات، تسجيل، حجز...) والجمهور المستهدف.",
        "إعداد أو تحسين صفحة الهبوط أو الموقع المرتبط بالحملة.",
        "إطلاق الحملة مع متابعة أولية للأداء.",
        "تعديلات وتحسينات بناءً على النتائج خلال الفترة الأولى.",
      ],
      en: [
        "Understand your campaign goals (sales, signups, bookings…) and target audience.",
        "Set up or refine your landing page or website.",
        "Launch the campaign and monitor initial performance.",
        "Optimize and adjust based on early results.",
      ],
    },
    faq: {
      ar: [
        {
          q: "هل تتولون إدارة الحملات بالكامل؟",
          a: "يمكننا إعداد الحملات وتهيئتها، أو إدارتها بشكل مستمر حسب الاتفاق.",
        },
        {
          q: "هل تضمنون نتائج معينة؟",
          a: "لا يمكن ضمان أرقام محددة، لكن نعمل على تحسين الأداء بأفضل شكل ممكن وفق المعطيات.",
        },
      ],
      en: [
        {
          q: "Do you fully manage the campaigns?",
          a: "We can either set them up for you or manage them on an ongoing basis, depending on the agreement.",
        },
        {
          q: "Can you guarantee specific results?",
          a: "We can’t guarantee exact numbers, but we work to improve performance based on real data.",
        },
      ],
    },
  },

  branding: {
    slug: "branding",
    name: {
      ar: "تصميم الهوية البصرية والشعارات",
      en: "Branding & visual identity",
    },
    shortDescription: {
      ar: "نصمّم هوية بصرية متكاملة من الشعار إلى الألوان والخطوط والمواد التسويقية.",
      en: "We design a complete visual identity from logo to colors, typography, and digital assets.",
    },
    audience: {
      ar: "المشاريع الجديدة أو الحالية التي تريد مظهراً متناسقاً وحديثاً على كل المنصات.",
      en: "New or existing businesses that need a consistent, modern look across all touchpoints.",
    },
    benefits: {
      ar: [
        "تصميم شعار واضح وحديث يناسب مجال عملك.",
        "اختيار ألوان وخطوط متناسقة تعكس شخصية البراند.",
        "تصميم مواد رقمية مثل البوستات، الكروت، الأغلفة، وغيرها.",
      ],
      en: [
        "Modern, memorable logo design relevant to your industry.",
        "Color palette and typography that reflect your brand personality.",
        "Digital assets such as social media posts, cards, covers, and more.",
      ],
    },
    process: {
      ar: [
        "جلسة لفهم شخصية البراند، جمهوره، وما يميّزه.",
        "عرض أكثر من اتجاه (Concepts) للشعار والهوية.",
        "تنقيح الاتجاه المختار وإخراج النسخة النهائية.",
        "تسليم ملفات قابلة للاستخدام في الطباعة والمنصات الرقمية.",
      ],
      en: [
        "Session to understand your brand personality, audience, and differentiators.",
        "Present multiple logo/identity concepts.",
        "Refine the selected concept into a final version.",
        "Deliver files ready for print and digital use.",
      ],
    },
    faq: {
      ar: [
        {
          q: "كم عدد مقترحات الشعار التي تقدمونها؟",
          a: "عادة نقدّم أكثر من اتجاه مبدئي ثم نركّز على واحد للتطوير حتى نصل للصيغة المناسبة.",
        },
        {
          q: "هل يمكن استخدام الهوية في الطباعة؟",
          a: "نعم، نسلم ملفات مناسبة للطباعة والاستخدام الرقمي معاً.",
        },
      ],
      en: [
        {
          q: "How many logo concepts do you provide?",
          a: "We usually present multiple initial concepts, then refine the chosen one until it fits.",
        },
        {
          q: "Are the identity files print-ready?",
          a: "Yes, we deliver files suitable for both print and digital usage.",
        },
      ],
    },
  },

  "ai-bots": {
    slug: "ai-bots",
    name: {
      ar: "بوتات الذكاء الاصطناعي للمواقع",
      en: "AI bots for your website",
    },
    shortDescription: {
      ar: "نطوّر بوتات ذكاء اصطناعي تساعد عملاءك مباشرة داخل موقعك بالإجابة على الأسئلة وتوجيههم.",
      en: "We build AI-powered bots embedded into your site to assist and guide your customers.",
    },
    audience: {
      ar: "المواقع التي تستقبل الكثير من الأسئلة المتكررة أو تحتاج مساعدة آلية للعملاء.",
      en: "Websites that receive many repetitive questions or need automated assistance for visitors.",
    },
    benefits: {
      ar: [
        "بوت يجيب عن الأسئلة المتكررة بناءً على محتوى موقعك وخدماتك.",
        "إمكانية ربطه مع واتساب أو البريد لاستلام الاستفسارات المهمة.",
        "تقليل الضغط على فريق الدعم أو المبيعات.",
      ],
      en: [
        "Bot that answers frequent questions based on your site content and services.",
        "Option to connect it with WhatsApp or email for important escalations.",
        "Reduce load on your support or sales team.",
      ],
    },
    process: {
      ar: [
        "تحديد نوع الأسئلة التي يواجهها عملاؤك عادة.",
        "جمع وتنظيم المحتوى الذي سيتعلم منه البوت (خدمات، أسئلة شائعة، نصوص...).",
        "إعداد وربط البوت بالموقع مع تجربة أولية.",
        "ضبط الردود وتحسين أداء البوت بناءً على تفاعل المستخدمين.",
      ],
      en: [
        "Identify the typical questions your customers ask.",
        "Collect and structure the content the bot will learn from (services, FAQ, docs…).",
        "Set up and integrate the bot into your website.",
        "Fine-tune responses and behavior based on real user interactions.",
      ],
    },
    faq: {
      ar: [
        {
          q: "هل يحتاج البوت لاشتراك شهري؟",
          a: "يعتمد على مزود خدمة الذكاء الاصطناعي المستخدم، يمكن مناقشة الخيارات الأنسب لميزانيتك.",
        },
        {
          q: "هل يمكن أن يتكلم البوت بالعربي؟",
          a: "نعم، يمكن إعداد البوت ليتعامل مع العربية والإنجليزية بحسب جمهورك.",
        },
      ],
      en: [
        {
          q: "Does the bot require a monthly subscription?",
          a: "It depends on the AI provider used; we’ll discuss options that match your budget.",
        },
        {
          q: "Can the bot speak Arabic?",
          a: "Yes, it can handle both Arabic and English depending on your audience.",
        },
      ],
    },
  },
};

export async function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: ServiceSlug }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = services[slug];

  if (!service) {
    return {};
  }

  const title =
    locale === "ar"
      ? `${service.name.ar} | خدمات SoftoDev`
      : `${service.name.en} | SoftoDev Services`;

  const langKey = locale === "ar" ? "ar" : "en";
  const description = service.shortDescription[langKey];

  const keywords =
    locale === "ar"
      ? [
          "برمجة مواقع",
          "صفحات هبوط",
          "متجر إلكتروني",
          "نظام إدارة",
          "تسويق رقمي",
          "تصميم هوية بصرية",
          "بوت ذكاء اصطناعي",
        ]
      : [
          "web development GCC",
          "landing pages",
          "online store",
          "management system",
          "digital marketing",
          "branding",
          "AI bot",
        ];

  const url = getCanonicalUrl(locale, `/services/${slug}`);

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { title, description },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: ServiceSlug }>;
}) {
  const { locale, slug } = await params;
  const isArabic = locale === "ar";
  const align = isArabic ? "text-right" : "text-left";
  const justify = isArabic ? "justify-end" : "justify-start";

  const service = services[slug];

  if (!service) {
    notFound();
  }

  const langKey = isArabic ? "ar" : "en";

  const faqEntities = service.faq[langKey].map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  }));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.name[langKey],
        description: service.shortDescription[langKey],
        serviceType: service.name.en,
        areaServed: {
          "@type": "AdministrativeArea",
          name: "GCC, Iraq",
        },
        provider: {
          "@type": "Organization",
          name: "SoftoDev",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqEntities,
      },
    ],
  };

  return (
    <>
      <section className="py-10 md:py-14 bg-softodev-bg/60">
        <Container className="space-y-8">
          {/* Hero */}
          <div className={`space-y-4 ${align}`}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-softodev-muted">
              {isArabic ? "خدمة SoftoDev" : "SoftoDev service"}
            </p>
            <h1 className="text-2xl font-semibold tracking-tight text-softodev-text md:text-3xl">
              {service.name[langKey]}
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-softodev-muted md:text-[15px]">
              {service.shortDescription[langKey]}
            </p>
            <p className="text-xs text-softodev-muted">
              {isArabic
                ? "خدمة مصممة خصيصاً لسوق الخليج والعراق من ناحية اللغة وتجربة المستخدم."
                : "A service tailored for GCC and Iraqi markets in language, structure, and UX."}
            </p>
            <div className={`flex flex-wrap gap-3 ${justify}`}>
              <a
                href="https://wa.me/905015954826"
                className="inline-flex items-center rounded-full bg-softodev-primary px-5 py-2 text-xs font-semibold text-white shadow-soft hover:bg-blue-700 md:text-sm"
              >
                {isArabic ? "ناقشنا فكرتك عبر الواتساب" : "Discuss your idea on WhatsApp"}
              </a>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center rounded-full border border-softodev-border bg-softodev-surface/90 px-5 py-2 text-xs font-semibold text-softodev-text hover:bg-softodev-primarySoft/70 md:text-sm"
              >
                {isArabic ? "اطلب عرض سعر تفصيلي" : "Request a detailed quote"}
              </Link>
            </div>
          </div>

          {/* Layout: benefits + FAQ + process */}
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)]">
            {/* Benefits + audience + FAQ */}
            <div className={`space-y-4 ${align}`}>
              {/* Benefits */}
              <div>
                <h2 className="text-sm font-semibold text-softodev-text md:text-base">
                  {isArabic
                    ? "ماذا ستحصل من هذه الخدمة؟"
                    : "What you get with this service"}
                </h2>
                <div className="mt-2 space-y-2 text-sm text-softodev-muted">
                  {service.benefits[langKey].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 rounded-2xl border border-softodev-border/70 bg-softodev-surface/95 px-3 py-2"
                    >
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-softodev-primary" />
                      <p className="leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Audience */}
              <div className="rounded-2xl bg-softodev-primarySoft/80 px-3 py-3 text-xs text-softodev-text">
                <div className="font-semibold">
                  {isArabic ? "لمن هذه الخدمة؟" : "Who is this for?"}
                </div>
                <p className="mt-1 leading-relaxed">
                  {service.audience[langKey]}
                </p>
              </div>

              {/* FAQ */}
              <div className="mt-4">
                <h2 className="text-sm font-semibold text-softodev-text md:text-base">
                  {isArabic ? "أسئلة شائعة" : "Frequently asked questions"}
                </h2>
                <div className="mt-2 space-y-2 text-sm text-softodev-muted">
                  {service.faq[langKey].map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-softodev-border/70 bg-gray-50 px-3 py-2"
                    >
                      <p className="text-xs font-semibold text-softodev-text md:text-sm">
                        {item.q}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed md:text-[13px]">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Process */}
            <div className={`space-y-3 ${align}`}>
              <h2 className="text-sm font-semibold text-softodev-text md:text-base">
                {isArabic ? "كيف يتم تنفيذ العمل؟" : "How the process works"}
              </h2>
              <ol className="space-y-2 text-sm text-softodev-muted">
                {service.process[langKey].map((step, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 rounded-2xl border border-softodev-border/70 bg-gray-50 px-3 py-2"
                  >
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-softodev-primarySoft text-[11px] font-semibold text-softodev-text">
                      {idx + 1}
                    </span>
                    <p className="leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-3 rounded-2xl border border-dashed border-softodev-border px-3 py-3 text-xs text-softodev-muted">
                {isArabic
                  ? "نركز على بناء أساس تقني منظم وقابل للتطوير، بحيث تستطيع إضافة خدمات أو توسيع مشروعك بسهولة مع الوقت."
                  : "We focus on a clean, scalable technical foundation so you can expand your services and products over time without friction."}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* JSON-LD: Service + FAQPage */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
