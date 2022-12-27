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
        figtree: ['var(--font-figtree)']
      },
      borderWidth: {
        1: '1px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}