import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a0806",
          900: "#13100d",
          800: "#1e1a16",
          700: "#2e2820",
          600: "#433c32",
          500: "#5c5248",
        },
        parchment: {
          50:  "#faf7f2",
          100: "#f2ede4",
          200: "#e8e0d2",
          300: "#d4c9b4",
          400: "#b8a98e",
          500: "#8a7a6a",
        },
        gold: {
          400: "#e8c96a",
          500: "#c49b3c",
          600: "#a07e28",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
