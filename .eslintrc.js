module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "quotes": [0, "double"],
    "comma-dangle": [0, {
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "never"
    }],
    'linebreak-style': [0, "windows"],
    'max-len': [0, { "ignoreComments": true }],
    'eslint-disable': [0, "eol-last"],
    'no-unused-vars': [0, { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "arrow-body-style": [0, "never"],
    "arrow-parens": [0, "never"],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
