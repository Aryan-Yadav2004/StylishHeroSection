/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00f3ff',
          pink: '#ff00ff',
          purple: '#b026ff',
          dark: '#050510'
        }
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
