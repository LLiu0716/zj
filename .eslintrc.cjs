/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    // 环境，针对哪些环境的语法
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    'prettier/prettier': 2,
    eqeqeq: 2,
    'no-unused-vars': 0,
    'no-console': 1,
    'no-cond-assign': 2,
    'comma-spacing': 2,
    'eol-last': 2,
    'key-spacing': 2,
    'no-dupe-args': 2,
    'no-unreachable': 2,
    'no-var': 2,
    'prefer-const': 2,
    'no-debugger': 2
  }
}
