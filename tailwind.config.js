/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'lg2': { 'max': '1024px' }, // Target screens up to 1023px
      // Other breakpoints...
    },
    extend: {},
  },
  plugins: [],
}

