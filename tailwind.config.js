/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        light: '#F8F8F8',
        primary: '#2C3E76',
      },
    },
    screens: {
      xs: '320px',
    },
  },
  plugins: [],
};
