import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        encode: ["Encode Sans", "sans-serif"],
        code: ["Source Code Pro", "monospace"],
      },
      colors: {
        "design-light": "#fef9f6",
        "design-orange": "#fcee09",
        "design-orange-pressed": "#00f0ff",
        "design-grey": "#d9d9d9",
        "design-dark": "#2e2e2e",
        "design-background": "#111827",
        "design-blue": "#06B6D4",
        "design-dark-grey": "#202326",
        "design-dark-grey-2": "#313438",
      },
      spacing: {
        160: "40rem",
        200: "50rem",
        fitting: "83vh",
      },
    },
  },
  plugins: [],
} satisfies Config;
