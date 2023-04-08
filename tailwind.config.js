/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "1/7": "14.285714%",
        "1/8": "12.5%",
        "1/9": "11.111111%",
        "1/10": "10%",
        "1/11": "9.0909%",
        "1/12": "8.33333%",
      },
      height: {
        "1/7": "14.285714%",
        "1/8": "12.5%",
        "1/9": "11.111111%",
        "1/10": "10%",
        "1/11": "9.0909%",
        "1/12": "8.33333%",
      },
      colors: {
        violet: "#0A092D",
        "pickled-bluewood": "#2E3856",
        "royal-blue": "#423ED8",
        "lightning-yellow": "#FFCD1F",
        "athens-gray": "#EDEFF4",
        "ebony-clay": "#282E3E",
        comet: "#626A82",
        "gull-gray": "#939BB4",
      },
    },
  },
  plugins: [],
};
