/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro"],
        inter: ["Inter"],
        notohk: ["Noto Sans HK"],
        notojp: ["Noto Sans JP"],
      },
      fontSize: {
        sm: [
          "1.6rem",
          {
            lineHeight: "2.4rem",
          },
        ],
        base: [
          "1.8rem",
          {
            lineHeight: "2.8rem",
          },
        ],
      },
      colors: {
        "mailtime-blue": "#2762D7",
        "mailtime-l-blue": "#64A2FF",
        "mailtime-blue-500": "#5D9BEC",
        "mailtime-blue-800": "#176DB9",
        "footer-grey": "#D9DBE1",
        ai: {
          blue: "#0000FF",
          "l-blue": "#009CFF",
          cyan: "#00FEFE",
          red: "#FF0000",
        },
      },
      boxShadow: {
        "ai-button": "4px 4px 12px #2762D7",
      },
    },
  },
  plugins: [],
};
