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
  ignorePatterns: '/dist',
  // apparently, b/c of jest tests, we need to make the app aware of these environments and use of their variables in order to avoid getting ESLint warnings
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  globals: {
    // true value here is equivalent to writable
    // setting this for use of expect in jest files
    expect: true
  }
};
