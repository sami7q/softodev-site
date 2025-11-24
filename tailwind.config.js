/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.25rem",
        screens: {
          lg: "1024px",
          xl: "1120px",
        },
      },
      colors: {
        softodev: {
          // خلفية عامة للموقع
          bg: "#E6ECF7",

          // سطح للكروت / النافبار
          surface: "#F1F5FD",

          // اللون الأساسي
          primary: "#1E5AEF",

          // لون ناعم للhover / الـchips
          primarySoft: "#D7E4FF",

          // لون الحدود
          border: "#C9D4EA",

          // لون النص الرئيسي
          text: "#0B1220",

          // لون النص الهادئ
          muted: "#465772",

          // درجات إضافية (اختيارية)
          surfaceStrong: "#EAF0FB",
          primaryDark: "#1747C8",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};
