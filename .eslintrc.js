module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['plugin:vue/recommended', 'standard'],
  plugins: ['vue'],
  rules: {
    'comma-dangle': 0,
    semi: 0,
  },
  ignorePatterns: '/dist',
};
