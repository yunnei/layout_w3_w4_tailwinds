const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{html,ejs}'],
  theme: {
    screens: {
      sm: '768px',
      md: '992px',
      lg: '1326px',
    },
    container: {
      center: true,
      padding: '15px',
    },
    fontFamily: {
      sans: ['Roboto', 'Noto Sans TC', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      sm: ['14px', 1.5],
      base: ['16px', 1.5],
      lg: ['18px', '26px'],
      xl: ['20px', 1.5],
      '2xl': ['24px', 1.5],
      '3xl': ['32px', 1.5],
      '4xl': ['36px', 1.5],
      '5xl': ['40px', 1.5],
      '6xl': ['42px', 1.5],
      '7xl': ['48px', 1.5],
      '8xl': ['64px', 1.5],
    },
    extend: {
      colors: {
        primary: {
          light: '#FBF2F2',
          DEFAULT: '#AA0601',
          dark: '#650300',
        },
        secondary: '#9F1213',
        light: '#707070',
        neutral: {
          '250': '#DCDCDC',
        },
        brown: {
          light: '#B75929',
          DEFAULT: '#5F3E2D',
        },
        gray: {
          light: '#F2F2F2',
          DEFAULT: '#555555',
        }
      },
      backgroundImage: {
        'logo': "url('../images/logo-white.png')",
        'banner': "url('../images/home-header-sm.png')",
        'banner-sm': "url('../images/home-header.png')",
        'co-brnad': "url('../images/index-bg.png')",
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};