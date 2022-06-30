/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.tsx',
    './index.html',
    './src/styles/*.scss',
    './src/layouts/**/*.tsx',
    './src/components/**/*.tsx',
  ],

  theme: {
    extend: {},
  },

  plugins: [
    require('@tailwindcss/forms'),
  ],
}
