/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef6ff",
          100: "#dbeeff",
          400: "#4fa3ff",
          600: "#0B5FFF",
        },
        slate: {
          950: "#031025",
        },
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 6px 20px rgba(11,95,255,0.08)",
      },
       keyframes: {
        loading: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        loadingBar: "loading 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};



