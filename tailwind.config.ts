import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        //lightTheme
        blueColor_lightTheme: '#C4EBED', 
        grayColor_lightTheme: '#F5F8FC',
        textColor_lightTheme: '#454746',
        //darkTheme
        blueColor_darkTheme: '#004A76',
        skyColor_darkTheme: '#C2E7FE',
        grayColor_darkTheme: '#303132',
        textColor_darkTheme: '#C4C7C5',
        bgColor_darkTheme: '#23272F',
      },
    },
  },
  plugins: [],
};



export default config;
