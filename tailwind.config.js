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

      // 👇 الإضافات الجديدة للأنيميشن
      keyframes: {
        "tech-orbit-1": {
          "0%": { transform: "translate3d(-8px, -6px, 0) rotate(-2deg)" },
          "50%": { transform: "translate3d(18px, 10px, 0) rotate(4deg)" },
          "100%": { transform: "translate3d(-12px, -4px, 0) rotate(-3deg)" },
        },
        "tech-orbit-2": {
          "0%": { transform: "translate3d(6px, 10px, 0) rotate(0deg)" },
          "50%": { transform: "translate3d(-20px, -6px, 0) rotate(-5deg)" },
          "100%": { transform: "translate3d(10px, 8px, 0) rotate(3deg)" },
        },
        "tech-orbit-3": {
          "0%": { transform: "translate3d(-4px, 8px, 0) rotate(2deg)" },
          "50%": { transform: "translate3d(16px, -10px, 0) rotate(-4deg)" },
          "100%": { transform: "translate3d(-6px, 6px, 0) rotate(2deg)" },
        },
      },
      animation: {
        "tech-orbit-1": "tech-orbit-1 22s ease-in-out infinite alternate",
        "tech-orbit-2": "tech-orbit-2 26s ease-in-out infinite alternate",
        "tech-orbit-3": "tech-orbit-3 30s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
