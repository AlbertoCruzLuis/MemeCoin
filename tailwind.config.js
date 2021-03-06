module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          1000: "#092B4A"
        },
        primaryPurple: {
          1000: "#251c38",
          900: "#2D2246"
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))"
      },
      screens: {
        xs: { max: "640px" },
        sm: { min: "640px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px", max: "1279px" },
        xl: { min: "1280px" }
      }
    }
  },
  plugins: []
}
