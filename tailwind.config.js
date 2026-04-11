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
        ivory: "#f5f7f3",
        sage: {
          50:  '#f2f5f0',
          100: '#dde8d9',
          200: '#b8d1b0',
          300: '#8db886',
          400: '#6b9e63',
          500: '#5a8a52',
          600: '#4a7542',
          700: '#3a5f34',
          800: '#2d4a28',
          900: '#1e3219',
        },
      },
    },
  },
  plugins: [],
}
