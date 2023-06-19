/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: ["#app"],
  darkMode: "class",
  theme: {
    container: {
      screens: {
        sm: "600px", //-40
        md: "728px", //-40
        lg: "924px", //-100
        xl: "1140px", //-140
        "2xl": "1363px", //-200
      },
    },
    extend: {
      colors: {
        "main-color": "#45C4AE",
        "main-med": "#3094A5",
        //"main-blue-gradient": "#155799",
        "main-blue-gradient": "#2C8AA3",
        "main-dark": "#273A3F",
        "dm-service": "#4552C4",
        "wd-service": "#1F7364",
        "ma-service": "#AE5726",
      },
      boxShadow: {
        "3xl":
          "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 0px 60px -15px rgb(0 0 0 / 0.1)",
      },
    },
    fontFamily: {
      ReadexPro: ["Readex Pro"],
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
