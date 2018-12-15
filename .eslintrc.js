const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'))

module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    amd: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:cypress/recommended',
    'plugin:import/warnings',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'jest', 'jsx-a11y', 'prettier'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'arrow-body-style': [2, 'as-needed'],
    'comma-dangle': [2, 'always-multiline'],
    quotes: [
      1,
      'single',
      {
        avoidEscape: true,
      },
    ],
    'no-undef': 2,
    'global-strict': 0,
    'no-extra-semi': 2,
    semi: ['error', 'never'],
    'no-underscore-dangle': 0,
    'no-shadow': 0,
    'no-unused-expressions': 0,
    'consistent-return': 0,
    'prefer-destructuring': 0,
    'no-useless-constructor': 0,
    'prefer-const': 0,
    'no-trailing-spaces': [
      1,
      {
        skipBlankLines: true,
      },
    ],
    'no-unreachable': 1,
    'no-alert': 1,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 1,
    'no-unused-vars': 2,
    'no-use-before-define': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'react/destructuring-assignment': 0,
    'react/jsx-closing-tag-location': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-uses-vars': 2,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/sort-comp': 0,
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
  },
  settings: {
    react: {
      version: '16.5.2',
    },
    'import/resolver': {
      alias: {
        map: [
          ['components', './src/components'],
          ['containers', './src/containers'],
          ['hoc', './src/hoc'],
          ['style', './src/style'],
          ['libs', './src/libs'],
          ['assets', './src/assets'],
          ['vendor', './src/vendor'],
        ],
        extensions: ['.js', '.json'],
      },
    },
  },
}
