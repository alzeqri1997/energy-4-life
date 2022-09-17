/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#F3BD43'
      },
      fontFamily: {
        poppins:["Poppins", "sans-serif"]
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '145px',
      },
    },
  },
  plugins: [],
}
