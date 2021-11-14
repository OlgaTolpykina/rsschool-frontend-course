module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['import'],
  ignorePatterns: ['dist', 'node_modules'],
  rules: {},
};
