const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{html,ejs}'],
  theme: {
    screens: {
      sm: '768px',
      md: '992px',
      lg: '1326px',
    },
    // screens: {
    //   'xl': {'max': '1296px'},
    //   'lg': {'max': '768px'},
    //   'md': {'max': '376px'},
    // },
    // screens: {
    //   '2xl': {'max': '1535px'},
    //   // => @media (max-width: 1535px) { ... }

    //   'xl': {'max': '1279px'},
    //   // => @media (max-width: 1279px) { ... }

    //   'lg': {'max': '1023px'},
    //   // => @media (max-width: 1023px) { ... }

    //   'md': {'max': '767px'},
    //   // => @media (max-width: 767px) { ... }

    //   'sm': {'max': '639px'},
    //   // => @media (max-width: 639px) { ... }
    // },
    container: {
      center: true,
      padding: '15px',
      // screens: {
      //   sm: '378px',
      //   md: '726px',
      //   lg: '1326px',
      //   // xl: '1240px',
      //   // '2xl': '1496px',
      // },
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
    // fontSize: {
    //   sm: ['0.875rem', '1.5'], 14
    //   base: ['1rem', '1.5'], 16
    //   lg: ['1.125rem', '1.5'], 18
    //   xl: ['1.25rem', '1.5'], 20
    //   '2xl': ['1.5rem', '1.5'], 24
    //   '3xl': ['2rem', '1.5'], 32
    //   '4xl': ['2.25rem', '1.5'], 36
    //   '5xl': ['2.5rem', '1.5'], 40
    //   '6xl': ['2.625rem', '1.5'], 42
    //   '7xl': ['3rem', '1.5'], 48
    //   '8xl': ['4rem', '1.5'], 64
    // },
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
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
    // extend: {
    //   colors: {
    //     primary: {
    //       DEFAULT: '#AA0601 !important',
    //       dark: '#650300 !important',
    //       light: '#FBF2F2',
    //     },
    //     gray: {
    //       DEFAULT: '#555555',
    //       light: '#DCDCDC',
    //     },
    //     grayLight: '#00000020',
    //     grayDark: '#212529',
    //   },
    // },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
// module.exports = {
//   content: ["./app/**/*.{html,ejs}"],
//   theme: {
//     // screens: {
//     //   '2xl': {'max': '1535px'},
//     //   // => @media (max-width: 1535px) { ... }

//     //   'xl': {'max': '1279px'},
//     //   // => @media (max-width: 1279px) { ... }

//     //   'lg': {'max': '1023px'},
//     //   // => @media (max-width: 1023px) { ... }

//     //   'md': {'max': '767px'},
//     //   // => @media (max-width: 767px) { ... }

//     //   'sm': {'max': '639px'},
//     //   // => @media (max-width: 639px) { ... }
//     // },
//     // screens: {
//     //   md: '768px',
//     //   lg: '960px',
//     //   xl: '1296px',
//     // },
//     screens: {
//       'lg': {'max': '1296px'},
//       'md': {'max': '768px'},
//       'sm': {'max': '376px'},
//     },
//     container: {
//       center: true,
//       padding: "15px"
//     },
//     extend: {
//       colors:{
//         primary: "#AA0601"
//       }
//     },
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//     require('@tailwindcss/typography'),
//   ],
// }