/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          primary: '#3b82f6', // electric blue
          secondary: '#8b5cf6', // violet
        },
      },
    },
  },
  plugins: [],
}

