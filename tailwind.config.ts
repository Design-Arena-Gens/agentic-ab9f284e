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
        night: "#07090F",
        "night-soft": "#0F1320",
        "cyber-cyan": "#3EE8FF",
        "royal-blue": "#3B5BFF",
        "glass-blue": "rgba(36, 58, 106, 0.65)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      dropShadow: {
        neon: "0 0 35px rgba(62, 232, 255, 0.45)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grid-light":
          "linear-gradient(rgba(62, 232, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(62, 232, 255, 0.08) 1px, transparent 1px)",
      },
      boxShadow: {
        "glow-cyan": "0 0 40px rgba(62, 232, 255, 0.18)",
        "glass-panel": "inset 0 1px 0 rgba(255,255,255,0.08), 0 20px 60px rgba(0,0,0,0.35)",
      },
      borderImage: {
        gradient:
          "linear-gradient(115deg, rgba(62,232,255,0.6), rgba(59,91,255,0.4)) 1",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.95" },
        },
        "pan-slow": {
          "0%": { transform: "translate3d(0%, 0%, 0)" },
          "50%": { transform: "translate3d(-10%, -6%, 0)" },
          "100%": { transform: "translate3d(0%, 0%, 0)" },
        },
      },
      animation: {
        "float-slow": "float-slow 12s ease-in-out infinite",
        "pulse-glow": "pulse-glow 8s ease-in-out infinite",
        "pan-slow": "pan-slow 20s linear infinite",
      },
      spacing: {
        18: "4.5rem",
      },
      blur: {
        30: "30px",
      },
      opacity: {
        15: "0.15",
      },
    },
  },
  plugins: [],
};
export default config;
