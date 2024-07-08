const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,css,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        gris: "var(--color-text-gris)",
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
        gris: "var(--color-text-gris)",
        dark: "var(--color-text-dark)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
        contactInput: "var(--color-background-contact-input)",
      },
      borderColor: {
        default: "var(--color-border)",
        input: "var(--color-border-input)",
      },
      placeholderColor: {
        default: "var(--color-placeholder)",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
        160: "40rem",
        176: "44rem",
        192: "48rem",
        208: "52rem",
      },
      screens: {
        mobile: "425px",
        mobileM: "375px",
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require("tailwindcss-fluid-type")],
};
