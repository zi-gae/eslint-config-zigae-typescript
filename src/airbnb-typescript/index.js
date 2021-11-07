// This file adds some React specific settings. Not using React? Use base.js instead.
module.exports = {
    extends: ['./shared'].map(require.resolve),
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.d.ts'],
        },
      },
    },
    rules: {
      'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    },
  };
  