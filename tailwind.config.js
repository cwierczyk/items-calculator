const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': 'var(--primary)',
      // 'primary-dark': 'var(--primaryDark)',
      // 'primary-light': 'var(--primaryLight)',
      black: colors.black,
      white: colors.white,
      'gray-light': '#F5F5F5',
      'gray-dark': '#525252',
      transparent: 'transparent',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1/5': '0.2px',
      '1/4': '0.25px',
      '1/2': '0.5px',
      '3/4': '0.75px',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    }
  },
  plugins: [],
}
