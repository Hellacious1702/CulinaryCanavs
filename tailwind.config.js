/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
       'sm': { 'max': '639px' },
       'md': { 'max': '767px' },
       'lg': { 'max': '1023px' },
       'xl': { 'max': '1279px' },
     },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        white: 'var(--color-white)',
        dark: 'var(--color-text-dark)',
        muted: 'var(--color-text-muted)',
        border: 'var(--color-border)',
        grey: 'var(--color-grey)'
      },
      fontFamily : {
        Headings : ["Montserrat", "sans-serif"],
        Body : ["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}