
module.exports = {
  plugins: [
    'react-hooks',
  ],
  ignorePatterns: ['*.html', '*.svelte'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
};
