const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    colors: {
      primary: {
        ...colors.blue,
        '700': '#2B6CB0'
      },
      secondary: {
        ...colors.red,
        '700': '#C53030'
      },
      neutral: colors.gray,
      white: '#FFF',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
