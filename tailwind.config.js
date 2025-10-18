// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#111111',
        border: '#1f1f1f',
        brand: {
          DEFAULT: '#3b82f6', // accent blue
          light: '#60a5fa',
          dark: '#1e40af',
        },
        text: {
          primary: '#f5f5f5',
          secondary: '#a1a1aa',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['DM Sans', 'sans-serif'],
      },
    },
  },

  plugins: [require('tailwindcss-animate')],
};
