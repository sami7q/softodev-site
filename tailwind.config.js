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
          // ✅ background becomes deeper blue-gray (less white)
          bg: "#E6ECF7",

          // ✅ surface for cards/nav becomes light gray-blue (not pure white)
          surface: "#F1F5FD",

          // ✅ richer primary
          primary: "#1E5AEF",

          // ✅ soft tint for chips/hover
          primarySoft: "#D7E4FF",

          // ✅ stronger border for depth
          border: "#C9D4EA",

          // ✅ deep text stays clean
          text: "#0B1220",

          // ✅ muted a bit darker for readability
          muted: "#465772",
          
          // (optional extras — safe to add)
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
