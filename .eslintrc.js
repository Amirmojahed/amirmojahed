module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/require-prop-types': 'OFF',
    'vue/require-default-prop': 'OFF',
    'vue/attributes-order': 'OFF',
    'vue/no-v-html': 'OFF',
    'no-console': 0,
  },
}
