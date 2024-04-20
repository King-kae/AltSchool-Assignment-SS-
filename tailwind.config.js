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
      
      colors: {
        zinc: {
          700: "rgb(36, 41, 47)",
        },
        yellow: {
          400: "#FFB633",
        },
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
