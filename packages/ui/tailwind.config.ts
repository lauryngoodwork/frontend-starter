import { Config } from "tailwindcss";
import { theme } from "./utils/tailwind/theme";

const config: Config = {
  content: [
    "../../packages/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme,
  plugins: [],
};

export default config;
