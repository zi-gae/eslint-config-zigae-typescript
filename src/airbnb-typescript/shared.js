const { rules: baseBestPracticesRules } = require('eslint-config-airbnb-base/rules/best-practices');
const { rules: baseErrorsRules } = require('eslint-config-airbnb-base/rules/errors');
const { rules: baseES6Rules } = require('eslint-config-airbnb-base/rules/es6');
const { rules: baseImportsRules } = require('eslint-config-airbnb-base/rules/imports');
const { rules: baseStyleRules } = require('eslint-config-airbnb-base/rules/style');
const { rules: baseVariablesRules } = require('eslint-config-airbnb-base/rules/variables');

module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
  rules: {
    'brace-style': 'off',
    '@typescript-eslint/brace-style': baseStyleRules['brace-style'],

    camelcase: 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],

    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': [
      baseStyleRules['comma-dangle'][0],
      {
        ...baseStyleRules['comma-dangle'][1],
        enums: baseStyleRules['comma-dangle'][1].arrays,
        generics: baseStyleRules['comma-dangle'][1].arrays,
        tuples: baseStyleRules['comma-dangle'][1].arrays,
      },
    ],

    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': baseStyleRules['comma-spacing'],

    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': baseBestPracticesRules['dot-notation'],

    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': baseStyleRules['func-call-spacing'],

    indent: 'off',
    '@typescript-eslint/indent': baseStyleRules.indent,

    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': baseStyleRules['keyword-spacing'],

    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': baseStyleRules['lines-between-class-members'],

    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': baseStyleRules['no-array-constructor'],

    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': baseES6Rules['no-dupe-class-members'],

    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': baseBestPracticesRules['no-empty-function'],

    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': baseErrorsRules['no-extra-parens'],

    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': baseErrorsRules['no-extra-semi'],

    'no-implied-eval': 'off',
    'no-new-func': 'off',
    '@typescript-eslint/no-implied-eval': baseBestPracticesRules['no-implied-eval'],

    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': baseBestPracticesRules['no-loop-func'],

    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': baseBestPracticesRules['no-magic-numbers'],

    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': baseBestPracticesRules['no-redeclare'],

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': baseVariablesRules['no-shadow'],

    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': baseBestPracticesRules['no-throw-literal'],

    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': baseBestPracticesRules['no-unused-expressions'],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': baseVariablesRules['no-unused-vars'],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': baseVariablesRules['no-use-before-define'],

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': baseES6Rules['no-useless-constructor'],

    quotes: 'off',
    '@typescript-eslint/quotes': baseStyleRules.quotes,

    semi: 'off',
    '@typescript-eslint/semi': baseStyleRules.semi,

    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': baseStyleRules['space-before-function-paren'],

    'require-await': 'off',
    '@typescript-eslint/require-await': baseBestPracticesRules['require-await'],

    'no-return-await': 'off',
    '@typescript-eslint/return-await': baseBestPracticesRules['no-return-await'],

    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': baseStyleRules['space-infix-ops'],

    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': baseStyleRules['object-curly-spacing'],

    'import/extensions': [
      baseImportsRules['import/extensions'][0],
      baseImportsRules['import/extensions'][1],
      {
        ...baseImportsRules['import/extensions'][2],
        ts: 'never',
        tsx: 'never',
      },
    ],

    'import/no-extraneous-dependencies': [
      baseImportsRules['import/no-extraneous-dependencies'][0],
      {
        ...baseImportsRules['import/no-extraneous-dependencies'][1],
        devDependencies: baseImportsRules[
          'import/no-extraneous-dependencies'
        ][1].devDependencies.reduce((result, devDep) => {
          const toAppend = [devDep];
          const devDepWithTs = devDep.replace(/\bjs(x?)\b/g, 'ts$1');
          if (devDepWithTs !== devDep) {
            toAppend.push(devDepWithTs);
          }
          return [...result, ...toAppend];
        }, []),
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'constructor-super': 'off',
        'getter-return': 'off',
        'no-const-assign': 'off',
        'no-dupe-args': 'off',
        'no-dupe-class-members': 'off',
        'no-dupe-keys': 'off',
        'no-func-assign': 'off',
        'no-new-symbol': 'off',
        'no-obj-calls': 'off',
        'no-redeclare': 'off',
        'no-this-before-super': 'off',
        'no-undef': 'off',
        'no-unreachable': 'off',
        'no-unsafe-negation': 'off',
        'valid-typeof': 'off',
        'import/named': 'off',
        'import/no-unresolved': 'off',
      },
    },
  ],
};
