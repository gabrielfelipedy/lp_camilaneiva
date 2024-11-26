import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#FFFFFF",
          primary: "#D2B496",
          secondary: "#935F3D",
          tertiary: "#C4A190",
          quarternary: "#ECE0D4"
        },
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
