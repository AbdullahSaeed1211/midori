/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "charcoal-black": "#000000",
        "off-white": "#fafbfc",
        "kiiro-yellow": "#FFEC00",
        "kiiro-yellow-light": "#FFF266",
        "kiiro-yellow-dark": "#E6D400",
        "kiiro-accent": "#FFF4CC",
        "gold": "#FFD700",
        "teal-accent": "#00CED1",
        "purple-accent": "#8A2BE2",
        "magenta-accent": "#FF00FF",
      },
      animation: {
        "scroll": "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
} 