/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        russo: ['Russo One', 'sans-serif'],
    },
    screens: {
      sm: '640px',
      md: "768px",
      lg: "920px",
      xl: "1300px"
    },
  },
  plugins: [],
}
}