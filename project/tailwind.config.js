/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#050C9C',
        customBlue2:"#3572EF",
        customBlue3:"#3ABEF9",
        customBlue4:"#A7E6FF"
      },
    },
  },
  plugins: [],
}

