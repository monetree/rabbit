/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        coffee: "#CB8966",
        selfGray: "#7D7D7D",
        beige: "#E3DDD1",
        darkGreen: "#02382A",
        lightBeige: "#F7F5F2",
        dark: "#100C0D",
      },
      fontSize: {
        xxs: "10px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
