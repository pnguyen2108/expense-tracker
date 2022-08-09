module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  root: true,
  extends: [ "eslint:recommended", "plugin:@typescript-eslint/recommended" ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
  },
  plugins: [ "react", "@typescript-eslint" ],
  rules: {
    "array-bracket-spacing": [ "error", "always" ],
    "object-curly-spacing": [ "error", "always" ],
    semi: [ "error", "always" ],
  },
  "extends":[]
};
