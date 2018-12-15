/* eslint-disable */
const path = require('path')
const { whenProd, POSTCSS_MODES, paths } = require('@craco/craco')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminJpegRecompress = require('imagemin-jpeg-recompress')
const imageminPngquant = require('imagemin-pngquant')
const imageminZopfli = require('imagemin-zopfli')
const imageminGiflossy = require('imagemin-giflossy')
const imageminWebp = require('imagemin-webp')

// TODO: It's not working as of now! :(
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

const { NODE_ENV } = process.env

module.exports = function() {
  return {
    style: {
      modules: {
        localIdentName: '[sha1:hash:hex:4]',
      },
      postcss: {
        mode: POSTCSS_MODES.file,
      },
    },
    babel: whenProd(() => ({
      comments: false,
      plugins: [
        '@babel/plugin-transform-react-constant-elements',
        '@babel/plugin-transform-react-inline-elements',
        'babel-plugin-transform-react-remove-prop-types',
        [
          'babel-plugin-transform-imports',
          {
            'react-router-dom': {
              transform: 'react-router-dom/${member}',
              preventFullImport: true,
            },
          },
        ],
        'babel-plugin-transform-react-class-to-function',
      ],
    })),
    webpack: {
      plugins:
        NODE_ENV === 'development'
          ? []
          : [
              new ImageminPlugin({
                plugins: [
                  imageminPngquant({
                    speed: 1,
                    quality: 98, //lossy settings
                  }),
                  imageminZopfli({
                    more: true,
                  }),
                  imageminMozjpeg({ progressive: true, quality: 80 }),
                  imageminJpegRecompress({
                    loops: 6,
                    min: 40,
                    max: 85,
                    quality: 'low',
                  }),
                  imageminGiflossy({
                    optimizationLevel: 3,
                    optimize: 3, //keep-empty: Preserve empty transparent frames
                    lossy: 2,
                  }),
                  imageminWebp({ quality: 50 }),
                ],
                svgo: {
                  removeViewBox: false,
                },
              }),
              new BundleAnalyzerPlugin(),
            ],
      resolve: {
        plugins: [new DirectoryNamedWebpackPlugin()],
      },
      alias: {
        components: path.join(paths.appSrc, 'components'),
        containers: path.join(paths.appSrc, 'containers'),
        hoc: path.join(paths.appSrc, 'hoc'),
        style: path.join(paths.appSrc, 'style'),
        libs: path.join(paths.appSrc, 'libs'),
        assets: path.join(paths.appSrc, 'assets'),
        vendor: path.join(paths.appSrc, 'vendor'),
      },
    },
    jest: {
      configure: {
        snapshotSerializers: ['enzyme-to-json/serializer'],
        moduleNameMapper: {
          '^components(.*)$': '<rootDir>/src/components$1',
          '^containers(.*)$': '<rootDir>/src/containers$1',
          '^hoc(.*)$': '<rootDir>/src/hoc$1',
          '^style(.*)$': '<rootDir>/src/style$1',
          '^libs(.*)$': '<rootDir>/src/libs$1',
          '^assets(.*)$': '<rootDir>/src/assets$1',
          '^vendor(.*)$': '<rootDir>/src/vendor$1',
        },
        moduleDirectories: ['node_modules', 'src'],
        testPathIgnorePatterns: ['<rootDir>/cypress/', '<rootDir>/node_modules/'],
      },
    },
  }
}
