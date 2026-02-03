/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#Fa7e70",     // custom primary color
        primary: "#E26D5C",     // custom primary color
        secondary: "#FFC107",   // custom secondary color
        dark: "#1E1E1E",        // dark tone
        light: "#F5F5F5",       // light tone
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
