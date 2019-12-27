/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      screens: {
        hmb: '640px'
      },
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
        'default-button': '0.85rem',
        xxs: '0.5rem',
        xxxs: '6px'
      },
      height: {
        'fill-available': '-webkit-fill-available',
        '60': '60px'
      },
      maxHeight: {
        '0': '0'
      },
      inset: {
        '100ps': '100%'
      },
      justifyContent: {
        evenly: 'evenly'
      },
      lineHeight: {
        zero: '0'
      },
      backgroundColor: {
        blur: '#35353599'
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
