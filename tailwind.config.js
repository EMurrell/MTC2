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
        bottom: "inset 0px -10px 0px   #ff2b00",
        bottom2: "inset 0px -13px 0px   #ff2b00",
        bottom3: "inset 0px -14px 0px   #ff2b00",
        bottom4: "inset 0px -11px 0px   #ff2b00",
      },
      backgroundImage: {
        hero: "url('/darkbricks3.jpg')",
        background2: "url('/walldark2.jpg')",
        quote: "url('/dots.svg)",
        blueprint: "url('/blueprint2.jpg')",
      },
      colors: {
        highlight1: "#ff2b00",
        highlight2: "#22d3ee",
      },
      fontFamily: {
        display: ["Roboto"],
        body: ["Merriweather"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
