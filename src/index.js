module.exports = {
  extends: ['./airbnb-typescript/index', './rules/imports'].map(require.resolve),
  env: {
    browser: true,
  },
};
