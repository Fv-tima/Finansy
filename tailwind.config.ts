import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/HOC/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: "hsl(197, 49%, 41%)",
        lgBlue: " hsl(198, 71%, 81%)",
        tintBlue: " hsl(198, 73%, 93%)",
        dRed: "hsl(0, 100%, 43%)",
        dBlack: "hsl(0, 0%, 12%)",
        lgBlack: "hsl(280, 1%, 50%)",
        dWhite: "hsl(0, 0%, 100%)",
        ash: " hsl(0, 0%, 82%)",
      },
    },
  },
  plugins: [],
};
export default config;


