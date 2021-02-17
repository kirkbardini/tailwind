module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ff6363',
        secondary: {
          100: '#e2e2d5',
          200: '888883',
        }
      },
      fontFamily: {
        kirk: ['Nunito']
      }
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
