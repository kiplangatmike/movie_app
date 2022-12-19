/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        movie1: "url('/public/assets/images/movie1.jpg')",
        witcher: "url('/public/assets/images/witcher.jpg')",
        witchery: "url('/public/assets/images/witchery.jpg')",
      },
      colors: {
        oil: "#050100",
        dark_black: "#111111",
        light_black: "#333333",

      }
    },
  },
  plugins: [],
};
