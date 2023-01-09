/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./dist/*.html', './dist/*.js', './src/**/*.js'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        balsamiq: ['Balsamiq Sans'],
        amiri: ['Lateef']
      },
      colors: {
        'green-1': '#F4F9F4',
        'green-2': '#A7D7C5',
        'green-3': '#74B49B',
        'green-4': '#5C8D89'
      },
      animation: {
        bounce: 'bounce 1s infinite'
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, .2, 1)'
          },
          '50%': {
            transform: 'translateY(-1%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          }
        }
      }
    }
  },
  plugins: []
}
