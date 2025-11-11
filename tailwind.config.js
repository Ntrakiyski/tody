/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        primaryDark: '#1C1514',
        lightGray: '#F7F4ED',
        textPrimary: '#475467',
        cardDark: '#2B2A2A',
        ctaBackground: '#212121',
        footerBg: '#0C111D',
        grayLight: '#F2F4F7',
        accentOrange: '#F38301',
        transparentOrange: 'rgba(243, 131, 0, 0.16)',
        transparentOrangeStrong: 'rgba(243, 131, 0, 0.56)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      spacing: {
        0: '0',
        4: '4px',
        8: '8px',
        16: '16px',
        24: '24px',
        32: '32px',
        40: '40px',
        64: '64px',
        96: '96px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '24px',
      },
    },
  },
  plugins: [],
}

