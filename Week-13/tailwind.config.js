/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'selector',
  theme: {
    extend: {
      colors:{
        blue:{
          200: "#131010"
        }
      }
    },
  },
  plugins: [],
}

