/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        navbar: {
          'background' : '#FFF',
          'text': '#5F5F5F'
        },
        home: {
          'title-h1': "#fff",
          'text-p': "#fff",
        },
        search: {
          'backgroundButtonActive': "#fff",
          'backgroundButton': "rgba(0, 0, 0, 0.25)",
          'textButton': "#FFFFFF",
          'textButtonActive': "#FCA640",
          'backgroundColorButtonSearch': "#FCA640",
        },
      },
      screens: {
        '3xl': '1680px',
        '4xl': '2200px',
        se:"200px",
        spro:"380px",
        xs: "780px",
        ss: "1100px",
        sm: "1150px",
        lt:"1400px",
        ltl:"1500px",
        md: "1650px",
        lg: "1700px",
        xl: "2000px",
      },
    },
  },
  plugins: [],
}
