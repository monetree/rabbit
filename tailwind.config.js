/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Manrope: ["Manrope", "sans-serif"],
      Inter: ['"Inter"', "sans-serif"],
    },
    extend: {
      colors: {
        lightGray: "#f5f5f5",
        lightGray2: "#525252",
        lightGray3: "#d4d4d4",
        lightGray4: "#a3a3a3",
        selfBlue: "#0a28f0",
        selfYellow: "#f7cd74",
        black1: "#121417",
        gray1: "#F2F7FA",
        gray2: "#333333",
        gray3: "#737373",
        gray4: "#666",
        gray5: "#888",
        gray6: "#111",
        gray7: "ebebeb",
        gray8: "#6B7D82",
        gray9: "#F2F2F5",
        darkBlue: "#1e2838",
        darkBlue2: "#012",
        lightBlue: "#91CCDE",
      },
      boxShadow: {
        custom: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
      },
    },
  },
};
