/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base': '#f02e65',
        'black':'#40404a',
        'light': '#fefefe'
      }
    },
  },
  plugins: [],
}