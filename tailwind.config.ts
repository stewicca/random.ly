import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
