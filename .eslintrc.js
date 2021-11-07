module.exports = {
  extends: ['eslint-config-airbnb-base', './base.js', 'prettier'],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
