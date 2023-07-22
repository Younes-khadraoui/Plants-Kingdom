/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-pic': "url('/assets/plants.png')",
      },
      fontFamily: {
        'playfair-display': ['"Playfair Display"', 'serif'] ,
        'poppins': ['"Poppins"', 'sans-serif'] 
      },
      boxShadow: {
        'effect': 'inset 0 -5rem 5rem -5rem #FFFF',
      },
    },
  },
  plugins: [],
}