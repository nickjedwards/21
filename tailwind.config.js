module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/forms")],
};
