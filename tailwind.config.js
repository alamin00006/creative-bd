/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff504c",
          secondary: "#218838",
          accent: "#34495E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};