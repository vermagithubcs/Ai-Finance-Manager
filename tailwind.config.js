/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html",
    './pages/**/*.html',
  ],
  theme: {
    extend: {
      borderRadius:{
        '25px':'25px',
        '10px':'10px',
        '20px':'20px',
        '8px':'8px',
        '50px':'50px',
        '50%':'50%',
      }
    },
  },
  plugins: [],
}

