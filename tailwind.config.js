/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#18191A',
        secondary: '#ebedf0',
        gray: '#242526',
        green: '#51D3AC',
        light: '#BDBDBD'
      }
    },
  },
  plugins: [],
}

