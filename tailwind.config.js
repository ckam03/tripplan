const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        warmGray: colors.warmGray,
        blueGray: colors.blueGray,
        Cyan: colors.cyan,
        Emerald: colors.emerald,
        lightblue: colors.lightBlue,
      },
      fontFamily: {
        'poppins':['Poppins', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
