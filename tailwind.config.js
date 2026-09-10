/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rio: {
          950: "#050b14",
          900: "#0a1220",
          800: "#101c30",
          700: "#182842",
        },
        acero: {
          400: "#7fb8d6",
          500: "#4a90b8",
          600: "#2e6f95",
        },
        oxido: {
          400: "#c9743b",
          500: "#b5622c",
          600: "#8f4b21",
        },
        alerta: {
          500: "#e0b93d",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      animation: {
        "spin-slow": "spin 22s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(127,184,214,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(127,184,214,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
