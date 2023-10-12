/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        bgdefault: '#EEF0FC',
        default: '#2B2F40',
        footer: '#DDE1F7',
        light: '#3E4970',
        primary: '#21AAEC',
        bgsecondary: '#FFFFFF',
        bgbuttonprimary: '#2B2F40',
        bgbuttonsecondary: '#E0E1E6',
        buttonprimary: '#21AAEC',
        buttonsecondary: '#3E4970',
       },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}