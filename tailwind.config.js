/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E5D9B6',
        'primary-green': '#A4BE7B',
        'secondary-green': '#5F8D4E',
        'dark-green': '#285430',
        'light-green': '#D0F5BE',
        'secondary-light-green':'#EDF1D6',
        'secondary-dark':'#9DC08B',
        'secondary-darker':'#609966',
        'secondary-darkest':'#40513B',
      },
    },
  },
  plugins: [],
}
