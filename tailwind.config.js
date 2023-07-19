/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-color': '#1E293B',
        'light-color': '#EDEDED',
        'dark-header': '#1b273b',
        'dark-content': '#0a1a33',
        'light-font': 'rgba(226,232,240,1)',
        'timeline': 'rgba(225,225,225, 9)'
      },
      borderRadius: {
        'circle': '50%'
      },
      borderWidth: {
        '1': '1px'
      },
      fontFamily: {
        'inter': ["'Inter'", 'sans-serif']
      },
      boxShadow: {
        'grid-content': '0 2rem 3rem rgba(132, 139, 200, 0.3)'
      },
      spacing: {
        '22': '-90px',
      },
      screens:{
        'phone': '321px',
      }
    },
  },
  plugins: [],
}

