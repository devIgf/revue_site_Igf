export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["'Playfair Display'", "serif"],
      },
      colors: {
        "igf-primary": "#0B153A",
        "igf-accent": "#0fa09b",
      },
      keyframes: {
        shine: {
          "0%": { top: "0", transform: "scaleY(5)", opacity: "0" },
          "10%": { opacity: "0.8" },
          "20%": { top: "100%", transform: "scaleY(10)", opacity: "0" },
          "100%": { top: "100%", transform: "scaleY(1)", opacity: "0" },
        },
        gradient: {
          to: { backgroundPosition: "200% center" },
        },
      },
      animation: {
        "fade-in-first": "fade-in 1s ease-out forwards",
        "fade-in-second": "fade-in 2s linear forwards",
      },
    },
  },
  plugins: [],
};
