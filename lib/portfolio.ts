// lib/portfolio.ts
import type { Locale } from "@/lib/i18n/config";

export const projectSlugs = ["atlastrendo", "mhakem", "emlaakna"] as const;
export type ProjectSlug = (typeof projectSlugs)[number];

type LocalizedText = { ar: string; en: string };

export type PortfolioProject = {
  slug: ProjectSlug;
  name: LocalizedText;
  shortDescription: LocalizedText;
  tag: LocalizedText;
  industry: LocalizedText;
  region: LocalizedText;
  stack: LocalizedText;
  context: LocalizedText;
  solution: LocalizedText;
  results: LocalizedText;
  liveUrl?: string;
};

const PROJECTS: PortfolioProject[] = [
  {
    slug: "atlastrendo",
    name: {
      ar: "منصّة ومتجر AtlasTrendo للأزياء (ويب + تطبيق)",
      en: "AtlasTrendo fashion multi-vendor platform (web + app)",
    },
    shortDescription: {
      ar: "منصّة أزياء متعددة البائعين مع موقع ومتجر إلكتروني متكامل وتطبيق موبايل متوفر على Google Play و App Store.",
      en: "A multi-vendor fashion platform with a full e-commerce website and mobile app published on Google Play and the App Store.",
    },
    tag: {
      ar: "متجر إلكتروني متعدد البائعين",
      en: "Multi-vendor marketplace",
    },
    industry: {
      ar: "أزياء وتجارة إلكترونية",
      en: "Fashion & E-commerce",
    },
    region: { ar: "تركيا والشرق الأوسط", en: "Turkey & MENA" },
    stack: {
      ar: "منصّة متجر إلكتروني حديثة + تطبيقات موبايل (Android / iOS)",
      en: "Modern e-commerce platform + mobile apps (Android / iOS)",
    },
    context: {
      ar: "علامة AtlasTrendo أرادت منصّة أزياء تعكس هوية البراند وتسمح لبائعين متعددين بعرض منتجاتهم مع تجربة موبايل قوية وجاهزية للإعلانات المدفوعة.",
      en: "AtlasTrendo needed a fashion platform that reflects their brand, supports multiple vendors, and delivers a strong mobile experience ready for paid ad campaigns.",
    },
    solution: {
      ar: "تم تصميم وتطوير واجهة متجر عصرية تركز على الصور والمنتجات، مع بنية جاهزة للبائعين المتعددين وتكامل مع تطبيق موبايل يعمل على Android و iOS.",
      en: "We designed and developed a modern storefront focused on visuals and products, with a multi-vendor-ready architecture and integration with mobile apps on Android and iOS.",
    },
    results: {
      ar: "أصبح لدى AtlasTrendo منصّة جاهزة للعرض على العملاء والشركاء، مع واجهة متجاوبة وسرعة تحميل محسّنة واستعداد للتوسع في الأسواق الإقليمية.",
      en: "AtlasTrendo now has a fully functional platform to showcase to customers and partners, with a responsive UI, optimized performance, and room to scale across the region.",
    },
    liveUrl: "https://atlastrendo.com/",
  },
  {
    slug: "mhakem",
    name: {
      ar: "منصّة Mhakem للتعليم الإلكتروني",
      en: "Mhakem online learning platform",
    },
    shortDescription: {
      ar: "منصّة تعليمية جامعية مشابهة لفكرة Coursera، مطلقة في السوق العراقي ومتبنّاة من عدّة جامعات منها جامعة كركوك.",
      en: "A university-grade e-learning platform similar to Coursera, launched in the Iraqi market and adopted by multiple universities including Kirkuk University.",
    },
    tag: {
      ar: "منصّة تعليمية جامعية",
      en: "University e-learning platform",
    },
    industry: {
      ar: "تعليم إلكتروني",
      en: "Online education",
    },
    region: { ar: "العراق", en: "Iraq" },
    stack: {
      ar: "منصّة دورات ومحاضرات واختبارات إلكترونية",
      en: "Courses, lectures and online exams platform",
    },
    context: {
      ar: "الجامعات احتاجت منصّة موحدة لتقديم المحاضرات والاختبارات ورفع المواد التعليمية للطلاب مع دعم اللغة العربية.",
      en: "Universities needed a unified platform to deliver lectures, exams, and course materials to students with full Arabic support.",
    },
    solution: {
      ar: "تم تطوير منصّة تعليمية تسمح للأساتذة بإنشاء المقررات، رفع المحتوى، إدارة الطلاب والاختبارات، مع واجهة مهيّأة للاستخدام من قبل الطلبة في العراق.",
      en: "We built a learning platform allowing instructors to create courses, upload content, manage students and exams, with an interface tailored for Iraqi students.",
    },
    results: {
      ar: "تم إطلاق المنصّة واعتمادها من عدّة جامعات، مما سهّل على الأساتذة إدارة المواد، وعلى الطلاب متابعة المحاضرات والاختبارات إلكترونياً.",
      en: "The platform was launched and adopted by several universities, making it easier for instructors to manage courses and for students to access lectures and exams online.",
    },
    liveUrl: "https://mhakem.net/",
  },
  {
    slug: "emlaakna",
    name: {
      ar: "منصّة Emlaakna للعقارات (ويب + تطبيق)",
      en: "Emlaakna real-estate platform (web + app)",
    },
    shortDescription: {
      ar: "منصّة عراقية لبيع وشراء وتأجير المنازل والعقارات مع تطبيق موبايل متوفر على Google Play و App Store.",
      en: "An Iraqi platform for buying, selling and renting properties with a mobile app available on Google Play and the App Store.",
    },
    tag: {
      ar: "منصّة عقارات",
      en: "Real-estate marketplace",
    },
    industry: {
      ar: "عقارات وإعلانات مبوبة",
      en: "Real-estate & classifieds",
    },
    region: { ar: "العراق", en: "Iraq" },
    stack: {
      ar: "منصّة عقارات + تطبيقات موبايل (Android / iOS)",
      en: "Real-estate web platform + mobile apps (Android / iOS)",
    },
    context: {
      ar: "السوق العقاري في العراق كان يعتمد بشكل كبير على الإعلانات العشوائية، والمنصّة استهدفت توحيد العروض في مكان واحد مع تجربة بحث سهلة.",
      en: "The Iraqi real-estate market relied mostly on scattered ads; the platform aimed to centralize listings in one place with an easy search experience.",
    },
    solution: {
      ar: "تم بناء منصّة عقارية تسمح للمستخدمين بنشر الإعلانات، تصفية النتائج حسب المدينة والسعر ونوع العقار، مع تكامل مع تطبيق موبايل لسهولة التصفح.",
      en: "We built a real-estate platform where users can post listings and filter by city, price and property type, integrated with a mobile app for easier browsing.",
    },
    results: {
      ar: "أصبح بإمكان المستخدمين استعراض العقارات في مدن مختلفة بسهولة، ونشر إعلاناتهم عبر الويب والتطبيق، مما يزيد من فرص البيع والشراء.",
      en: "Users can now browse properties across cities more easily and post their own listings via web and app, increasing opportunities for deals.",
    },
    liveUrl: "https://emlaakna.com/ar",
  },
];

export function getProjectsForLocale(locale: Locale) {
  return PROJECTS.map((p) => ({
    slug: p.slug,
    name: p.name[locale],
    short: p.shortDescription[locale],
    tag: p.tag[locale],
    industry: p.industry[locale],
    region: p.region[locale],
    liveUrl: p.liveUrl,
  }));
}

export function getProjectBySlug(slug: ProjectSlug) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllProjectSlugs() {
  return projectSlugs;
}
