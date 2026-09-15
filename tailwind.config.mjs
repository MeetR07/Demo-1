/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        royal: ["'Cinzel'", "Georgia", "serif"],
        sans: ["'Outfit'", "'Poppins'", "system-ui", "sans-serif"],
      },
      colors: {
        paper: "#FAF8F5",
        "paper-soft": "#F5F2EC",
        "paper-accent": "#FFFDF9",
        "paper-dark": "#12100E",
        "paper-darker": "#0A0908",
        ink: "#1C1917",
        "ink-light": "#44403C",
        headings: "#574838",
        "ink-muted": "#78716C",
        gold: "#C5A059",
        "gold-light": "#DFC289",
        "gold-dark": "#936F32",
        "gold-hover": "#292524",
        "border-light": "#E8E2D9",
        "border-gold": "#C5A05933",
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


