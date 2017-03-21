module.exports = {
  plugins: ['import'],
  extends: [
    'eslint:recommended',
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
    'no-unused-vars': [
      'error',
      {
        args: 'none'
      }
    ],
    'one-var': [
      'error',
      {
        initialized: 'never'
      }
    ],
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true
      }
    ]
  }
};
