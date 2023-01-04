/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
      arrow: 'arrow'
    },
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)'},
          '15%': { transform: 'rotate(14.0deg)'},
          '30%': { transform: 'rotate(-8.0deg)'},
          '40%': { transform: 'rotate(14.0deg)'},
          '50%': { transform: 'rotate(-4.0deg)'},
          '60%': { transform: 'rotate(10.0deg)'},
          '70%': { transform: 'rotate(0.0deg)'},
          '100%': { transform: 'rotate(0.0deg)'},
        }
      },
      animation: {
        wave: 'wave 1.5s infinite'
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      }
    },
  },
  variants: {
    lineClamp: ['responsive', 'hover'],
    extends: {
      visibility: ["group-hover"],
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide')
  ],
}
