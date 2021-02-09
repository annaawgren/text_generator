module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: "2px 4px 0 0 rgba(239, 222, 205, 100)",
      DEFAULT:
        "4px 6px 0 0 rgba(239, 222, 205, 100), 4px 6px 0 0 rgba(239, 222, 205, 100)",
    },

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
    sm: "8px",
    md: {
      min: "10px",
      max: "14px",
      minvw: "320px",
      maxvw: "1280px",
    },
    lg: {
      min: "14px",
      max: "20px",
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
