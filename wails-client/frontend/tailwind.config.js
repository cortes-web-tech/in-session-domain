/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          400: "#eeefff",
          500: "#87b9ff",
          600: "#1B7ADD",
          700: "#3a9eff",
          800: "#005cbf",
        },
        white: "#FFF",
        black: "#000",
      },
    },
  },

  plugins: [],
};
