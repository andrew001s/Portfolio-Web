/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '20px',
      },
    },
    dropShadow: {
      'custom': '5px 5px 3px rgba(255, 255, 255, 0.2)',
      'custom-md': '3px 3px 0px rgba(255, 255, 255, 0.2)',
    },
    fontFamily: {
      fredoka: ['Fredoka One', 'sans-serif'],
    },

  },
  plugins: [],
}

