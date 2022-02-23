module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        bottom: "inset 0px -11px 0px   #Fe5000",
        bottom2: "inset 0px -13px 0px   #Fe5000",
        bottom3: "inset 0px -14px 0px   #Fe5000",
        bottom4: "inset 0px -11px 0px   #525252",
      },
      backgroundImage: {
        hero: "url('/bluegray3.jpg')",
        quote: "url('/dots.svg)",
      },
      colors: {
        highlight1: "#fe5000",
        highlight2: "#22d3ee",
        dark: "#45433e",
      },
      fontFamily: {
        logo: ["Play"],
        display: ["Poppins"],
        body: ["Space Grotesk"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
