/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f67222",
        secondary: "#3b5998",
        accent: "#55acee",
        background: "#f5f5f5",
        typography: "#333333",
        button: "#ffffff",
        border: "#dddddd",
      },
      fontFamily: {
        Rregular: ["regular"],
        Rmedium: ["medium"],
        Rbold: ["bold"],
        Rlack: ["black"],
      },
    },
  },
  plugins: [],
};
