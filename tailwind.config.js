/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  plugins:[
    require("flowbite/plugin")
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['Inter', 'sans-serif'],
        jakartasans: ['PlusJakarta', 'sans-serif']
      },
    },
  },
  plugins: [],
}
