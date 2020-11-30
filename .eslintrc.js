module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['plugin:vue/recommended', 'standard'],
  plugins: ['vue'],
  // 0 = off, 1 = warning, 2 = error
  rules: {
    'comma-dangle': 0,
    semi: 0,
    'space-before-function-paren': 0,
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': 0
  },
  ignorePatterns: '/dist'
};
