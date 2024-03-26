import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)"],
      },
    },
    screens: {
      'xs': '300px',
      'sm': '520px',
      'md': '768px',
      'lg': '976px',
      'xl': '1240px',
      '2xl': '1436px',
      '3xl': '1920px',
    },
  },
  plugins: [],
};
export default config;
