// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  theme: {},
  variants: {
    backgroundColor: ["dark", "dark-hover", "dark-group-hover"],
    borderColor: ["dark", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active"]
  },
  // https://github.com/tailwindcss/custom-forms
  plugins: [
    require("@tailwindcss/custom-forms"),
    require("tailwindcss-dark-mode")()
  ]
};
