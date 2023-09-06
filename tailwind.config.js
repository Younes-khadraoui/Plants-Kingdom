/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-pic': "url('/src/assets/plants.png')",
      },
      boxShadow: {
        'effect': 'inset 0 -5rem 5rem -5rem #FFFF',
      },
    },
  },
  plugins: [],
}