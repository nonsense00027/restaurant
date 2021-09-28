module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        sm: "8px",
        md: "16px",
        lg: "420px",
        xl: "48px",
      },
      animation: {
        "ping-slow": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      colors: {
        primary: {
          light: "#FF6868",
          DEFAULT: "#FB8553",
          dark: "#EE6352",
        },
        dark: {
          light: "#707070",
          DEFAULT: "#2D2C32",
        },
      },
    },
  },
  variants: {
    extend: {
      transform: ["active"],
      scale: ["active"],
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
