/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      primary: '#35D3FF',
      secondary: '#A963FB',
      limeGreen: '#00A077',
    },
    extend: {
      gradientColorStops: {
        'red-blue': ['#35D3FF', '#A963FB'], // Define your gradient colors here
      },
      linearGradientDirections: {
        'custom-direction': 'to top right', // Define your gradient direction here
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-gradients'),
  ],
}