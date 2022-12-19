/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  plugins:[
    require("flowbite/plugin")
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['Inter', 'sans-serif'],
        jakartasans: ['PlusJakarta', ...fontFamily.sans]
      },
    },
  },
  plugins: [],
}
