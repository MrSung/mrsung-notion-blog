module.exports = {
  extends: [
    'standard-with-typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
}
