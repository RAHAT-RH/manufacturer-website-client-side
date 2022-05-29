module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
  
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#00D7DF",
          secondary: "#004E36",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      
    ],
  },
  plugins: [require("daisyui")],
}
