module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    node: true,
    es6: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  rules: {
    'indent': ["off"],
    'no-trailing-spaces': 'off',
    'space-before-function-paren': 'off',
    'vue/html-self-closing': 'off',
    'no-new': 'off',
    'no-tabs': 'off',
    'no-unused-vars': 'off',
    'no-prototype-builtins': 'off'
  }
}