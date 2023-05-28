/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  overrides: [
    {
      files: ['*.html'],
      rules: {
        'vue/comment-directive': 'off',
      },
    },
    {
      files: ['*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off',
      }
    }
  ],
};
