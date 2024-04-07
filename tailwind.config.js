/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tab': '500px',
        'bigtab': '850px',
        'bigtlap': '1430px',
      }
    },
  },
  plugins: [],
}