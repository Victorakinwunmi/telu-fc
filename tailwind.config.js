module.exports = {
  purge: {
    enabled: true,
    content: [
      './pages/**/*.vue',
      './**/*.html',
      './*.html',
    ],
  },

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: theme => ({
        'screen-40': '40vh',
        'screen-50': '50vh',
        'screen-60': '60vh',
        'screen-70': '70vh',
        'screen-75': '75vh',
        'screen-80': '80vh',
        'screen-90': '90vh',

      }),

      colors: {

        accent1: {
          '100': '#fff3ea',
          '200': '#ffe7d3',
          '300': '#ffd1ac',
          '400': '#fea964',
          '500': '#d97e35',
          '600': '#ab4c00',
        },
        accent2: {
          '100': '#e4ffea',
          '200': '#c5ffd1',
          '300': '#9fffb3',
          '400': '#60a86f',
          '500': '#306f40',
          '600': '#124e21',
        },
        accent3: {
          '100': '#dddddd',
          '200': '#838383',
          '300': '#515151',
          '400': '#343434',
          '500': '#222222',
          '600': '#000000',
        },

      },

      zIndex: {
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        '60': 60,
        '70': 70,
        '80': 80,
        '90': 90,
        '100': 100,
        '110': 110,
        '120': 120,
        '130': 130,
        '140': 140,
        '150': 150,
        'auto': 'auto',
      },

      display: [
        "group-hover",
      ]
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
