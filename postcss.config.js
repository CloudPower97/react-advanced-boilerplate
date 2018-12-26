module.exports = {
  plugins: [
    require('postcss-modules-values-replace'),
    require('postcss-flexbugs-fixes'),
    require('postcss-brand-colors'),
    require('postcss-assets')({
      basePath: 'src/assets/',
      loadPaths: ['img/'],
      relative: true,
    }),
    require('postcss-color-function'),
    require('postcss-easing-gradients'),
    require('postcss-font-magician')({
      variants: {
        Raleway: {
          '400': ['woff, eot, woff2'],
        },
        Roboto: {
          '400': ['woff, eot, woff2'],
        },
      },
      foundries: ['google'],
    }),
    require('postcss-pseudo-content-insert'),
    require('postcss-will-change-transition'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 0,
      features: {
        'nesting-rules': true,
      },
      importFrom: ['src/style/selectors.css', 'src/style/colors.css'],
    }),
    require('postcss-pxtorem'),
    require('cssnano')({
      preset: 'default',
    }),
  ],
}
