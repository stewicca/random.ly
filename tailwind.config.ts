import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "1920": "1920px",
      "1440": "1440px",
      "1366": "1366px",
      "1280": "1280px",
      "1024": "1024px",
    },
    extend: {
      fontFamily: {
        geistSans: ["var(--font-geist-sans)"],
        geistMono: ["var(--font-geist-mono)"],
      },
      colors: {
        blue: "#0736FE",
        black: "#211F20",
        white: "#F4F4F2",
      },
    },
  },
  plugins: [],
} satisfies Config;
