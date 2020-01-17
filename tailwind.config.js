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
        hmb: '640px',
        xs: '440px'
      },
      colors: {
        'header-address': '#e5e5e5',
        main: '#c23874'
      },
      width: {
        'fit-content': 'fit-content',
        wxl: '440px',
        wlg: '380px',
        wmd: '293px',
        wsm: '210px',
        sx: '110px',
        logo: '162px',
        '1/10': '10%'
      },
      maxWidth: {
        'main-wrapper': '1800px',
        'coll-wapper': '1441px'
      },
      minWidth: {
        size: '2.25rem'
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
      minHeight: {
        size: '2.25rem'
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
      },
      spacing: {
        '2/5': '40%'
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
