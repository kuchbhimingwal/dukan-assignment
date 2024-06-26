/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      navColor: "#1e2640",
      white: "#ffffff",
      black: "#000000",
      navHover: "#363c53",
      searchBar: "#f2f2f2",
      searchText: "#808080",
      red: "red",
      borderRadius: "#d9d9d9",
      dashboardBack: "#fafafa",
      darkGrey: "#707070",
      blue: {
        400: "#126eb4"
      },
      websiteBlue: {
        light : "#126eb4",
        dark : "#0e4f82"
      }
    }
  },
  plugins: [],
}

