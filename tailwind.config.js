/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#2874A6',
          orange: '#FF8C00',
          'blue-dark': '#1B5A8E',
          'orange-dark': '#E67E00',
        },
      },
    },
  },
  plugins: [],
}
