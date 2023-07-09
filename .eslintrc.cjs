/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  root: true,
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/tests/**/*.ts', '**/tests/**/*.tsx'],
      plugins: ['vitest'],
      extends: ['plugin:vitest/all'],
    },
  ],
};
