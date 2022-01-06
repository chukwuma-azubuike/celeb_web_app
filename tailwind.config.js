module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['"Open Sans", sans-serif']
    },
    extend: {
      colors: {
        purple: '#7708BE',
        lightPurple: '#0000EA',
        primaryGrey: {
          '400': '#222222',
          '300': '#888888',
          '200': '#DCDCDC',
          '100': '#F8F8F8'
        },
        primaryBlue: {
          '400': '#0000EA',
          '200': '#002EF1',
          '100': '#005CFF'
        },
        primaryYellow: {
          '400': '#FF9700',
          '200': '#FFB802',
          '100': '#FFE604'
        },
        redError: {
          '400': '#FD0025',
          '200': '#FE3F61',
          '100': '#FF7E86'
        },
        greenSuccess: {
          '400': '#02971C',
          '200': '#009846',
          '100': '#36EA88'
        },
        orangeWarning: {
          '400': '#EB3800',
          '200': '#FF6711',
          '100': '#FF9922'
        },
      },
      background: {
        gradient: '#7708BE'
      },
      backgroundImage: {
        buttonGradient: 'linear-gradient(267.61deg, #7708BE 38.06%, #0000EA 96.12%)'
      },
      fontFamily: {
        'primary': ['Epilogue']
      },
      fontWeight: {
        bold: '700',
        regular: '400',
        light: '200'
      },
      gridTemplateColumns: {
        'top-nav': 'auto auto',
        'footer': '200px minmax(900px, 1fr) 100px',
      },
      gridTemplateRows:{
        'footer': 'auto 300px',
      }
    },
  },
  addons: [
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  plugins: [],
}