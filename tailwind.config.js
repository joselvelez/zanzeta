module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif'],
        'serif': ['ui-serif'],
        'questrial': ['Questrial'],
      }
    },
  },
  variants: {
    display: ['responsive', 'group-hover']
  },
  plugins: [],
}