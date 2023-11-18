/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      boxShadow: {
        little: "1px 1px 0px 0px rgba(0,0,0,0)",
        big: "5px 5px 0px 0px rgba(0,0,0,0),",
      },
      colors: {
        custom1: "#2FFF2F",
        custom2: "#FF00F5",
        custom3: "#F4D738",
        custom4: "#FFA07A",
        custom5: "#A388EE",
        custom6: "#FFB2EF",
        custom7: "#90EE90",
        custom8: "#FF6B6B",
        custom9: "#87CEEB ",
      },
    },
  },
  plugins: [],
};
