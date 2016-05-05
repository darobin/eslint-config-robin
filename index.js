
module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  env: {
    "browser": true,
    "mocha": true,
    "node": true
  },
  rules: {
    'consistent-return': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'no-shadow': ['error', { allow: ['err', 'error', 'res', 'resp', 'body']}],
    'no-cond-assign': ['error', 'except-parens'],
    'prefer-const': 0,
    'prefer-template': 0,
    'func-names': 0,
    'no-console': ['warn', { allow: ['error', 'warn'] }],
    'new-cap': 0,
    'react/jsx-space-before-closing': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-boolean-value': 0,
    'space-before-function-paren': 0,
    'one-var': 0,
    'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'comma-style': ['error', 'last', { exceptions: { VariableDeclaration: true } }],
    'no-restricted-syntax': ['error', 'WithStatement']
  }
};
