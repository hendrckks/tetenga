/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['"Satoshi"', 'sans-serif'],
        rx100: ['RX100-Regular', 'sans-serif'],
        dancing: ['DancingScript-Variable', 'cursive'],
        'dancing-regular': ['DancingScript-Regular', 'cursive'],
        'dancing-bold': ['DancingScript-Bold', 'cursive'],
      },
    },
  },
  plugins: [],
};
