/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "380px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1600px",
    },
    colors: {
      blue: "#65AACD",
      purple: "#6F5F9B",
      pink: "#ff49db",
      orange: "#F3A44D",
      red: "#C44461",
      crimson: "#9A233E",
      green: "#5EA496",
      "green-light": "#69B865",
      yellow: "#DACC67",
      "gray-dark": "#5C5C5C",
      "gray-divide": "#909090",
      gray: {
        100: "#EAEAEA",
        200: "#C7C7C7",
        300: "#9D9D9D",
        400: "#5C5C5C",
        500: "#444444",
        600: "#373737",
        700: "#2E2E2E",
        800: "#232323",
      },
      white: "#FFFFFF",
      "background-white": "#EFEFEF",
      "background-dark": "#232323",
      transparent: "transparent",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
}
