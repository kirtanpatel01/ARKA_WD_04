/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   'll': '1440px',
    //   'l': '1024px',
    //   't': '768px',
    //   'ml': '425px',
    //   'm': '375px',
    //   'sm': '320px'
    // },
    extend: {
      dropShadow: {
        '2xl': '0 25px 25px rgba(0, 0, 0, 0.25)', 
      },
      boxShadow: {
        'bottom-xl': '0 8px 16px rgba(10, 10, 10, 0.7)',
        'equal': '0 0 1.5rem rgba(6, 182, 212, 0)',
      }
    },
  },
  plugins: [],
}

