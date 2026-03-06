import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "glass-gradient":
          "linear-gradient(135deg, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.4) 100%)",
      },
      backdropBlur: {
        glass: "20px",
      },
      backgroundColor: {
        glass: "rgba(15, 23, 42, 0.5)",
        "glass-border": "rgba(148, 163, 184, 0.08)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(15, 23, 42, 0.37)",
      },
    },
  },
  plugins: [],
};

export default config;
