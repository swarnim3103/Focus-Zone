/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#DEF9C4',
        customGreen2:"#50B498",
        customGreen3:"#468585",
        customGreen4:"#9CDBA6"
      },
    },
  },
  plugins: [],
}

