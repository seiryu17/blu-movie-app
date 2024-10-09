module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f2937", // Dark Gray
        accent: "#eab308", // Bright Yellow
      },
      spacing: {
        18: "4.5rem", // Custom spacing
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
