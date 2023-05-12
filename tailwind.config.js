/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Primary: {
          orange: 'hsl(26, 100%, 55%)',
          paleOrange: 'hsl(25, 100%, 94%)',
        },
        Neutral: {
          VeryDarkBlue: 'hsl(220, 13%, 13%)',
          DarkGrayishBlue: 'hsl(219, 9%, 45%)',
          GrayishBlue: 'hsl(220, 14%, 75%)',
          LightGrayishBlue: 'hsl(223, 64%, 98%)',
        },
      },
      maxWidth: {
        '8xl': '87.5rem',
      },
    },
    fontFamily: {
      kumbhSans: ['Kumbh Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
