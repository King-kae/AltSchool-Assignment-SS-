/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      ss: "620px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      gridTemplateColumns: {
        1: 'repeat(auto-fit, minmax(238px, 1fr))'
      },
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      
      
      colors: {
        zinc: {
          700: "rgb(36, 41, 47)",
        },
        yellow: {
          400: "#FFB633",
        },
        blue: '#61DBFB',
        sky: {
          500: "rgb(9, 105, 218)",
        },
        repoColor: "rgb(87, 96, 106)",
        gitGreen: "#237B3C",
      },
      fontFamily: {
        josefin: ["Poppins", "sans-serif"],
        playfair: ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
};
