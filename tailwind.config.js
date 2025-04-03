/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xsm": '300px',
        "desktop": '1900px'
      },
      colors: {
        "pale": "#808080",
      },
      fontSize: {
        "small": '15px'
      }
    },
  },
  plugins: [],
}
