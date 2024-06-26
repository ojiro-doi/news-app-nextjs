import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        //lightTheme
        blueColor_lightTheme: '#C4EBED', //selected box
        grayColor_lightTheme: '#F5F8FC', //default box
        textColor_lightTheme: '#454746', //text color
        //darkTheme
        blueColor_darkTheme: '#004A76', //selected box
        skyColor_darkTheme: '#C2E7FE', //selected text color
        grayColor_darkTheme: '#303132',//default box
        textColor_darkTheme: '#C4C7C5', //default text color
        bgColor_darkTheme: '#23272F', //background color
      },
    },
  },
  plugins: [],
};

export default config;
