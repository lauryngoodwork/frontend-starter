import type { Config } from "tailwindcss";
const configTheme: Pick<Config, "theme"> = {
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontSize: {
      "3xl": "3rem", //48px
      "2xl": "2rem", //32px
      xl: "1.5rem", //24px
      lg: "1rem", //16px
      md: "0.875rem", //14px
      sm: "0.75rem", //12px
      xs: "0.625rem", //10px
    },
    extend: {
      backgroundImage: {},
      fontFamily: {},
      colors: {},
    },
  },
};

const theme = configTheme.theme;

export { theme };
