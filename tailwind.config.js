module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    screens: {
      m: { max: '1024px' },
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      spot: ['Spot'],
    },
    extend: {
      spacing: {
        1.5: '6px',
        30: '120px',
        906: '906px',
        428: '428px',
      },
      colors: {
        'primary-dark': '#05D7E8',
        'primary-light': '#ADF9FF',
        'gray-dark': '#171717',
        'gray-light': '#282727',
        gray: '#D0D0D0',
        aviators: '#E0E21A',
        warriors: '#2FE477',
        marines: '#05D8E8',
        brawlers: '#FC764C',
        tacticians: '#4DA6FA',
        ebony: '#313236',
        'black-navigation': '#1F2023',
        'tangerine-yellow': '#FFC700',
        'wild-watermelon': '#FF575B',
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
        orb: "'Orbitron', sans-serif",
      },
      transitionDuration: {
        900: '900ms',

        400: '400ms',
      },
      rotate: {
        16.72: '-16.72deg',
        5.6: '5.6deg',
        13.22: '-13.22deg',
        11.33: '11.33deg',
        105: '105deg',
        60: '60deg',
      },
      fontSize: {
        button: ['24px', '28px'],
        sm: ['22px', '32px'],
        xl: ['64px', '78px'],
        mobilexl: ['32px', '40px'],
        mobilesm: ['18px', '32px'],
        mobilebutton: ['16px', '19px'],
      },
      inset: {
        '567.08px': '567.08px',
        '724.88px': '724.88px',
        '749px': '749px',
        '328.76px': '328.76px',
        '681.25px': '681.25px',
        '867.25px': '867.25px',
        '928.51px': '928.51px',
        '1129.22px': '1129.22px',
        '558.89px': '558.89px',
        '1340.51px': '1340.51px',
        '109.55px': '109.55px',
        '85.55px': '85.55px',
        '782.08px': '782.08px',
        '244.76px': '244.76px',
        '882px': '882px',
      },
      height: {
        50: '50px',
        288: '288px',
        428: '428px',
        155: '155.5px',
      },
      width: {
        50: '50px',
        288: '288px',
        428: '428px',
        216: '216.42px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
