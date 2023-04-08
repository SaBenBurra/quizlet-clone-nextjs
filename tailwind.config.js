/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: "#0A092D",
        "pickled-bluewood": "#2E3856",
        "royal-blue": "#423ED8",
        "lightning-yellow": "#FFCD1F",
        "athens-gray": "#EDEFF4",
        "ebony-clay": "#282E3E",
        comet: "#626A82",
      },
    },
  },
  plugins: [],
};
