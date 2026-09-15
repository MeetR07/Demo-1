/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Poppins'", "'Cormorant Garamond'", "sans-serif"],
        sans: ["'Raleway'", "'Poppins'", "system-ui", "sans-serif"],
      },
      colors: {
        paper: "#F3F2EE",
        "paper-accent": "#FFFDF8",
        "paper-dark": "#1E1C1A",
        ink: "#2C2C2C",
        headings: "#6B5D4F",
        "ink-muted": "#6B5D4F",
        gold: "#9F9483",
        "gold-hover": "#434343",
        "border-light": "#E7E3DF",
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};


