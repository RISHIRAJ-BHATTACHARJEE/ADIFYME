/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgba(255,130,0,1) 0%, rgba(149,76,0,1) 25%, rgba(10,6,0,1) 90%);',
      },
      fontFamily: {
        montserrat: ['Montserrat'],
      },
    },
  },
  plugins: [],
}

