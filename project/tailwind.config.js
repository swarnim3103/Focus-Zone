/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#201E43',
        customBlue2:"#134B70",
        customBlue3:"#508C9B",
        customBlue4:"#EEEEEE"
      },
    },
  },
  plugins: [],
}

