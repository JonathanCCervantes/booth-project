/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        cream: '#FAFAF8',
        charcoal: '#2D2D2D',
        blush: '#E8C5B0',
        sage: '#C8D5C0',
        muted: '#6B6B6B',
      },
    },
  },
  plugins: [],
}
