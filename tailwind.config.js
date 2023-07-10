/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'open-sans':['Open Sans', 'sans-serif'],
        'hk-grotesk':['Hanken Grotesk', 'sans-serif'],
      },
      colors: {
        'bground': 'rgba(252, 90, 90, 1)',
        'bgblue' : 'rgba(21, 101, 216, 1)',
        'blackk' : 'rgba(24, 59, 86, 1)',
        'bgash' : '#F2F2F2',
        'green-button' : "rgba(54, 179, 126, 1)",
        'yelloww' : 'rgba(250, 173, 19, 1)',
        'bluee' : 'rgba(21, 101, 216, 1)',
        'hero-text' : "rgba(90, 113, 132, 1)",
        'greyy' : 'rgba(149, 158, 173, 1)',
        'light-green' : '#DDFFDD',
        'redd' : 'rgba(233, 84, 50, 1)',
        'light-grey' : 'rgba(179, 186, 197, 1)',
        'firebrick' : 'firebrick',
      },
      borderRadius: {
        'half': '50%',
      }
    },
  },
  plugins: [],
}

