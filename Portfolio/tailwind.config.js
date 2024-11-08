/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#3C3D37',
        shgreen: '#697565',
        darkGreen: '#181C14',
        cream: '#ECDFCC'
      },
    },
  },
  plugins: [],
}

