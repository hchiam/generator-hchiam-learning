const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

// postcss will run tailwindcss, then cssnano, purgecss, and autoprefixer:
module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'), // use tailwind CSS settings
    cssnano({ // make CSS small
      preset: 'default',
    }),
    purgecss({ // remove unused CSS
      content: ['./src/*.html'],
      defaultExtractor: content =>
        content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
    autoprefixer,
  ],
};
