/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Enable just-in-time (JIT) mode for faster development
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [
    function ({addUtilities}) {
        const extendUnderline = {
            '.underline': {
                'textDecoration': 'underline',
                'text-decoration-color': 'blue',
            },
        }
        addUtilities(extendUnderline)
    }
]
}