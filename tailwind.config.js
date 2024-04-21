/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
      },
      colors: {
        primary: "#9437f1",
        primary1: "#9F50ED",
        primaryhover: "#c08ff0",
        secondary1: "#6f5c71",
        secondary: "#433443",
        secondary2: "#a096a3",
        tertiary: "#7C8D7E", //not yet
        primarydisabled: "#dbc7ef",
        //f5edf7
      },
      boxShadow: {
        input: "0px 0px 0px 2px #D5E8D6", //edit color later
      },
    },
  },
  plugins: [],
};
