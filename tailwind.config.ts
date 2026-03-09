import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── 배경 ──
        navy: "#0B1120",
        "navy-mid": "#0F172A",
        "navy-light": "#1E293B",

        // ── 메인 포인트 (스카이 블루) ──
        matcha: {
          DEFAULT: "#38BDF8",
          dim:    "#38BDF820",
          border: "#38BDF830",
          glow:   "#38BDF840",
          light:  "#7DD3FC",
          dark:   "#0EA5E9",
        },

        // ── 텍스트 ──
        frost: {
          DEFAULT: "#C4CBDC",
          dim:     "#8892A4",
          bright:  "#E2E8F0",
        },
      },

      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },

      backgroundImage: {
        "gradient-matcha": "linear-gradient(135deg, #38BDF8, #7DD3FC)",
        "gradient-dark":   "linear-gradient(180deg, #0B1120 0%, #0F172A 100%)",
      },

      boxShadow: {
        "matcha-sm": "0 0 12px rgba(56, 189, 248, 0.15)",
        "matcha-md": "0 0 30px rgba(56, 189, 248, 0.2)",
        "matcha-lg": "0 0 60px rgba(56, 189, 248, 0.15), 0 0 120px rgba(56, 189, 248, 0.05)",
        "card":      "0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        "card-hover":"0 8px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(56, 189, 248, 0.1)",
      },

      animation: {
        "fade-in":      "fadeIn 0.6s ease forwards",
        "slide-up":     "slideUp 0.6s ease forwards",
        "pulse-slow":   "pulse 4s ease-in-out infinite",
        "float":        "float 6s ease-in-out infinite",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-8px)" },
        },
      },

      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;