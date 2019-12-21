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
        'fit-content': 'fit-content',
        'main-wrapper': '1800px'
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
