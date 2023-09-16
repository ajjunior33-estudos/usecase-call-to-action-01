/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "girl": "url('/mulher_sentada_na_cadeira.png')",
        filter: "linear-gradient(90deg, #000 0.13%, #000 0.14%, rgba(0, 0, 0, 0.00) 99.56%);",
        "room": "url('/unsplash_XEmaJaM-4nE.png')"
      }
    },
  },
  plugins: [],
}