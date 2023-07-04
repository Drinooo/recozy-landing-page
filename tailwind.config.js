/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{react,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      black: "#1D1D1D",
      white: "#FFF",
      orange: "#E75833",
      gold: "#FFD700",
      hoverOrangeBtn: "#E43609",
      lightOrange: "#E7583380",
      lightBlue: "#F4F5FA",
      transparent: "#FFF0",
    },
    fontFamily: {
      header: ["Bebas Neue", "sans-serif"],
      body: ["Roboto", "sans-serif"],
    },
    fontSize: {
      'h1': ["128px", { lineHeight: "150%" }],
      'phone-h1': ["90px", { lineHeight: "150%" }],

      'h2': ["76px", { lineHeight: "120%" }],
      'phone-h2': ["50px", { lineHeight: "150%" }],

      'h3': ["30px", { lineHeight: "150%" }],

      'h4': ["26px", { lineHeight: "140%" }],
      'phone-h4': ["22px", { lineHeight: "140%" }],

      'h5': ["20px", { lineHeight: "150%" }],

      'h6': ["30px", { lineHeight: "140%" }],
      'phone-h6': ["26px", { lineHeight: "140%" }],

      'body1': ["24px", { lineHeight: "150%" }],
      'phone-body1': ["18px", { lineHeight: "150%" }],

      'body2': ["16px", { lineHeight: "150%" }],
      'phone-body2': ["14px", { lineHeight: "150%" }],

      'price': ["20px", { lineHeight: "150%" }],
      'button': ["18px", { lineHeight: "150%" }],
      'textButton': ["16px", { lineHeight: "150%" }],

      'position': ["18px", { lineHeight: "150%" }],
      'phone-position': ["16px", { lineHeight: "150%" }],
    },
  },
  plugins: [],
});
