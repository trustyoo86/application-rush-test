const fs = require('fs');
const path = require('path');

const tsConfig = fs.existsSync('tsconfig.json')
  ? path.resolve('tsconfig.json')
  : undefined;

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    project: tsConfig,
    createDefaultProgram: true,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  globals: {
    process: false,
    module: false,
  },
  rules: {
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    indent: ['error', 2, { SwitchCase: 1 }],
    'valid-jsdoc': [
      'off',
      {
        requireReturn: false,
        preferType: {
          Boolean: 'boolean',
          String: 'string',
          Number: 'number',
          object: 'Object',
          array: 'Array',
          function: 'Function',
          element: 'Element',
          any: '*',
        },
      },
    ],
    'block-scoped-var': 'warn',
    curly: 'error',
    eqeqeq: 'warn',
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    semi: 'error',
    'no-inline-comments': 'off',
    'no-debugger': 'error',
    'no-console': 'off',
    'no-empty': 'warn',
    'no-spaced-func': 'warn',
    'no-array-constructor': 'error',
    'no-undefined': 'warn',
    'no-undef': 'error',
    'no-alert': 'off',
    'no-loop-func': 'error',
    'no-extra-semi': 'error',
    'no-multi-spaces': 'error',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '[I]\\w+',
      },
    ],
    'no-use-before-define': ['off', { functions: false }],
    'object-curly-spacing': ['warn', 'always'],
    'space-before-blocks': 'error',
    'semi-spacing': ['error', { before: false, after: true }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'no-new-object': 'error',
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'space-infix-ops': ['error'],
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never' },
    ],
    'no-var': 'error',
    'no-const-assign': 'error',
    'object-shorthand': 'error',
    'arrow-parens': ['off', 'as-needed', { requireForBlockBody: true }],
    'no-duplicate-imports': 'error',
    'no-extra-boolean-cast': 'off',
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/self-closing-comp': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'redux-saga/no-unhandled-errors': 'off',
    'react/display-name': 'off',
  },
  // overrides: [
  //   {
  //     files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
  //     rules: {},
  //   },
  //   {
  //     files: ['*.ts', '*.tsx'],
  //     parserOptions: { project: './tsconfig.*?.json' },
  //     rules: {
  //       camelcase: [
  //         'error',
  //         { properties: 'never', ignoreDestructuring: true },
  //       ],
  //       'comma-spacing': ['error', { before: false, after: true }],
  //       'comma-style': ['error', 'last'],
  //       'comma-dangle': ['error', 'always-multiline'],
  //       'brace-style': ['error', '1tbs', { allowSingleLine: true }],
  //       indent: ['error', 2, { SwitchCase: 1 }],
  //       semi: 'error',
  //       'no-var': 'error',
  //       'key-spacing': ['error', { beforeColon: false, afterColon: true }],
  //       quotes: ['error', 'single'],
  //       'react/react-in-jsx-scope': 'off',
  //       '@typescript-eslint/ban-ts-comment': 'off',
  //       '@typescript-eslint/no-this-alias': 'off',
  //       '@typescript-eslint/no-empty-function': 'off',
  //       'no-extra-boolean-cast': 'off',
  //       '@typescript-eslint/no-inferrable-types': 'off',
  //       '@typescript-eslint/ban-types': 'off',
  //       '@typescript-eslint/no-explicit-any': 'off',
  //     },
  //   },
  //   {
  //     files: ['*.js', '*.jsx'],
  //     rules: {
  //       camelcase: [
  //         'error',
  //         { properties: 'never', ignoreDestructuring: true },
  //       ],
  //       'comma-spacing': ['error', { before: false, after: true }],
  //       'comma-style': ['error', 'last'],
  //       'comma-dangle': ['error', 'always-multiline'],
  //       'brace-style': ['error', '1tbs', { allowSingleLine: true }],
  //       indent: ['error', 2, { SwitchCase: 1 }],
  //       semi: 'error',
  //       'no-var': 'error',
  //       'key-spacing': ['error', { beforeColon: false, afterColon: true }],
  //       quotes: ['error', 'single'],
  //       'react/react-in-jsx-scope': 'off',
  //     },
  //   },
  // ],
};
