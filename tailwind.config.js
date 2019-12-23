/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        'header-address': '#e5e5e5'
      },
      width: {
        'fit-content': 'fit-content'
      },
      maxWidth: {
        'main-wrapper': '1800px'
      },
      fontSize: {
        'default-button': '0.85rem'
      },
      height: {
        'fill-available': '-webkit-fill-available'
      },
      transition: {
        zoom: 'transform .25s ease'
      },
      transform: {
        scale: 'scale(1.1)'
      }
    },
    fontFamily: {
      main: ['Quicksand', 'sans-serif'],
      branch: ['Inria Serif', 'serif'],
      section: ['Roboto Mono', 'monospace']
    }
  },
  variants: {},
  plugins: []
}
