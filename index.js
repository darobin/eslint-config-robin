module.exports = {
  plugins: [
    'react',
    // 'jsx-a11y',
    'import'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    //'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true
  },
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  rules: {
    'no-console': ['warn', { allow: ['error', 'warn'] }],
    'no-unused-vars': ['error', { args: 'none', ignoreRestSiblings: true }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-bitwise': ['error', { allow: ['~'] }],
    'no-cond-assign': ['error', 'except-parens'],
    'no-restricted-syntax': ['error', 'WithStatement']
    //'jsx-a11y/img-redundant-alt': 0
  }
};
