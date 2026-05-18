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
        background: "#000000",
        foreground: "#ffffff",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-josefin)", "Helvetica Neue", "sans-serif"],
        oswald: ["var(--font-oswald)", "Impact", "sans-serif"],
        poppins: ["var(--font-poppins)", "Helvetica Neue", "sans-serif"],
        comfortaa: ["var(--font-comfortaa)", "system-ui", "sans-serif"],
        outfit: ["var(--font-outfit)", "system-ui", "sans-serif"],
      sacramento: ["var(--font-sacramento)", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
