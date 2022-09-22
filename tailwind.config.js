const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:['Montserrat', 'sans-serif'], 
        'roboto-slab': ['Roboto Slab', 'serif']
      },
      letterSpacing: {
        widest: '.19em',
      },
      colors: {
        'pale-grey': '#f5f6fa',
        'author-blue': '#4386bf',
        'opaque-grey': '#121212',
        'divider-grey': '#e8e8e8',
        'warm-grey': '#888888',
        'book-blue': '#0290ff',
        'bd-grey': '#e8e8e8'
      },
      screens: {
        sm: { max: '768px' },
        sl: { max: '500px' },
        ms: { max: '1212px' },
        fold: { max: '327px' },
        pro: { max: '900px' }
      }
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
});
