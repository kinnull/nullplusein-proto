/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Melno: "Menlo Regular",
      },
      colors: {
        pureGreen: "#162C13",
        lightGreen: "#B7D04E",
      },
      backgroundImage: {
        "drawing-bg": "url('../src/images/drwaing-bg.png')",
      },
    },
  },
  plugins: [],
};
