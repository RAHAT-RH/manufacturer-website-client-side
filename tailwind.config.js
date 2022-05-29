module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
  
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#004E36",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      
    ],
  },
  plugins: [require("daisyui")],
}
