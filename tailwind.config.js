module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['"Open Sans", sans-serif']
    },
    extend: {
      colors: {
        purple: '#7708BE',
        lightPurple: '#0000EA'
      },
      background: {
        gradient: '#7708BE'
      },
      backgroundImage: {
        buttonGradient: 'linear-gradient(267.61deg, #7708BE 38.06%, #0000EA 96.12%)'
      },
      fontFamily: {
        'primary': ['Epilogue']
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