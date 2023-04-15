/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      primary: "#1FC77E",
      black: "#000000",
      gray: "rgba(255, 255, 255, 0.2);",
      "primary-text": "#05E283",
      "theme-gray": "#414651",
      "dark-blue": "#111826",
    },
  },
  plugins: [],
};
