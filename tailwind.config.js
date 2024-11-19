/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F2F3F5',
        primary: '#8DFB8A'
      }
    }
  },
  plugins: []
}
