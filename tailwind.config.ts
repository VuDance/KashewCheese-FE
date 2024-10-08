import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor:{
        "primary": "#FFFFFF",
        "secondary": "#F5F7FA",
        "disabled":"#ccc"  
      },
      colors:{
        "sidebar":"#2D60FF",
        'primary':"#263238",
        'disabled':"#888"
      }
    },
  },
  plugins: [],
};
export default config;
