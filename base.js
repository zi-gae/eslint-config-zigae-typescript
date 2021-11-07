module.exports = {
  extends: ['./src/airbnb-typescript/index']
    .map(require.resolve)
    .concat([
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'prettier',
    ]),
  env: {
    browser: true,
  },
};
