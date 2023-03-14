/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    semi: ['error', 'always'],
    'no-console': 'error',
    'no-unused-vars': ['warn', { 'args': 'none' }],
    'no-undef': 'error',
    'indent': ['error', 2],
    'max-len': ['warn', { 'code': 120 }],
  },
}
