import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        retro: ["var(--font-retro)", "monospace"],
        geist: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        retro: {
          black: "#1a1f16",
          yellow: "#f1c40f",
          brown: "#5e412f",
          green: "#00ff9f",
          red: "#ff4b4b",
          bg: "#2d2d2d",
        },
      },
      boxShadow: {
        "retro-strong": "4px 4px 0 #000",
      },
      borderWidth: {
        6: "6px",
        8: "8px",
      },
      borderRadius: {
        none: "0px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
