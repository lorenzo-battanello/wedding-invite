/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Lato", "system-ui", "sans-serif"],
      },
      colors: {
        ivory: "#fdf6f0",
      },
    },
  },
  plugins: [],
}
