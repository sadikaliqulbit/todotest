/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        heading: ["Black Ops One", "system-ui"], 
        title:["Mozilla Headline", "sans-serif"],
        subtitle:["Google Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
}