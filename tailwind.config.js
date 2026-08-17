/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#060709",
          900: "#0a0c10",
          850: "#0f1218",
          800: "#151923",
          700: "#1e2432",
          600: "#2b3345",
          400: "#5b6579",
          300: "#8892a6",
          200: "#b9c1d1",
          100: "#e5e9f1",
        },
        accent: {
          300: "#ffd27a",
          400: "#f5b04c",
          500: "#f09819",
          600: "#d97f06",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "PingFang SC",
          "Hiragino Sans GB",
          "Microsoft YaHei",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        marquee: "marquee 30s linear infinite",
        "aurora": "aurora 18s ease-in-out infinite alternate",
        "aurora-reverse": "auroraReverse 22s ease-in-out infinite alternate",
        "btn-glow": "btnGlow 2.6s ease-in-out infinite",
        "border-spin": "borderSpin 6s linear infinite",
        "blink": "blink 0.9s step-end infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-dot": "pulseDot 1.4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        aurora: {
          "0%": { transform: "translate(-10%, -6%) rotate(0deg) scale(1)" },
          "50%": { transform: "translate(12%, 10%) rotate(24deg) scale(1.25)" },
          "100%": { transform: "translate(-6%, 14%) rotate(-16deg) scale(1.1)" },
        },
        auroraReverse: {
          "0%": { transform: "translate(8%, 10%) rotate(0deg) scale(1.1)" },
          "50%": { transform: "translate(-14%, -8%) rotate(-20deg) scale(1)" },
          "100%": { transform: "translate(10%, -12%) rotate(18deg) scale(1.3)" },
        },
        shine: {
          "0%": { transform: "translateX(-160%) skewX(-20deg)" },
          "100%": { transform: "translateX(360%) skewX(-20deg)" },
        },
        borderSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        btnGlow: {
          "0%, 100%": { boxShadow: "0 8px 40px -10px rgba(240, 152, 25, 0.55)" },
          "50%": { boxShadow: "0 10px 60px -6px rgba(245, 160, 30, 0.9), 0 0 24px -2px rgba(255, 210, 122, 0.5)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.75)" },
        },
      },
    },
  },
  plugins: [],
};
