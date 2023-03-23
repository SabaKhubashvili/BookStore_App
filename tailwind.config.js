/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xxs:'281px',
        xs:'479px',
        sm:'768px',
        md:'1024px',
        lg:'1600px',
        xl:'2500px',
  },
  fontFamily:{
    'Roboto':['Roboto','sans-serif']
  },
  backgroundColor:{
    'bodyBg':'#FDF8EE',
    'primary':'#4D2C5E'
  },
  boxShadow:{
    'Courses':'0px 4px 25px rgba(0, 0, 0, 0.1)'
  },
  colors:{
    'primary':'#4D2C5E',
    'secondary':'#FF7426'
  },
    },
  },
  plugins: [],
}