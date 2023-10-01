/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'itim': ['Itim', 'sans']
      },
      screens: {
        'fs': '1180px',
        'as': {'min': '768px', 'max': '1180px'}
      },
    },
  },
  plugins: []
}

