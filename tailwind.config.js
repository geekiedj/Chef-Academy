/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".-rotate-y-180": {
      transform: "rotateY(-180deg)",
    },
  });
});

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#4c3d4c",
        "color-primary-light": "#e58c87",
        "color-primary-dark": "#ba473d",
        "color-secondary": "#a7e079",
        "color-gray": "#6da6e3",
        "color-white": "#fff",
        "color-blob": "#78debe",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "50px",
      },
    },
  },
  plugins: [rotateY],
};
