/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        mocherat: ["Montserrat", "sans-serif"],
      }
    },
  },
	plugins: [],
}

