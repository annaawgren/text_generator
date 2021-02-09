module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: {
        DEFAULT: "#2E5052",
      },
      beige: {
        DEFAULT: "#EFDECD",
      },
      red: {
        DEFAULT: "#F37058",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-fluid")({
      suffix: "",
      textSizes: true, // use the settings defined the core config (above)
    }),
  ],

  textSizes: {
    sm: "12px",
    md: {
      min: "12px",
      max: "20px",
      minvw: "320px",
      maxvw: "1280px",
    },
    lg: {
      min: "26px",
      max: "55px",
      minvw: "320px",
      maxvw: "1280px",
    },
  },

  modules: {
    // ...

    textSizes: false, // disable the core module

    // ...
  },
};
