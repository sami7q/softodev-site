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
          bg: "#f3f4f6", // خلفية عامة فاتحة
          surface: "#ffffff",
          primary: "#1d4ed8", // تقدر تغيّرها لاحقاً حسب هوية SoftoDev
          primarySoft: "#dbeafe",
          border: "#e5e7eb",
          text: "#0f172a",
          muted: "#6b7280",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};
