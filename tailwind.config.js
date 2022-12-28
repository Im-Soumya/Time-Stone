/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        marcellus: ['var(--font-marcellus)'],
        figtree: ['var(--font-figtree)'],
        montserrat: ['var(--font-montserrat)']
      },
      borderWidth: {
        1: '1px'
      },
      colors: {
        "chineseblack": "#0A0A0A",
        "chineseblack2": "#0B0B0B",
        "darkcharcoal": "#171717",
        "smokyblack": "#0E0E0E",
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}