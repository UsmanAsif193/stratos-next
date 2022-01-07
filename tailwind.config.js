module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mf: "990px",
        "3xl": "2500px",
      },
      backgroundImage: {
        "cloud-image-index": "url('/assets/Sky-Background3.png')",
        "cloud-image-index-2":
          "url(/assets/Sky-Background2-Section-2.png),linear-gradient(#000000, #5a5858)",
      },
    },
  },
  plugins: [],
};
