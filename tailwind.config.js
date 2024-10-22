/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      boxShadow: {
        'xll': '0 0 20px 0 rgba(0, 0, 0, 0.3)',
      }
 
    },
    colors:{
      'black': '#000000',
      'white': '#ffffff',
      'orange': '#c55b11',
      'red': '#ff0000',
      'grey': "#f9fafb",
      'green': "#32CD32"
    },
  },
  plugins: [],
}

