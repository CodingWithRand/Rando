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
        'mh': '1180px'
      },
    },
  },
  plugins: []
}

