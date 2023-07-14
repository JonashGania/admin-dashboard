/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-color': '#1E293B',
        'light-color': 'EDEDED'
      },
      borderRadius: {
        'circle': '50%'
      },
      fontFamily: {
        'inter': ["'Inter'", 'sans-serif']
      }
    },
  },
  plugins: [],
}

