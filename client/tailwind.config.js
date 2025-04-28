/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}", // for React components
      "node_modules/flowbite/**/*.js" // for core plugins
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('flowbite/plugin') 
    ],
  }
  