/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "nature-light": "url('https://image.tmdb.org/t/p/original/kXbW6BKF2tL0aI7a9RsfJ5w4FhP.jpg')",
      },
    },
  },
  plugins: [],
};
