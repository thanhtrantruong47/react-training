module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
    amd: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      js: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-extra-semi": "error",
    "react/prop-types": "off",
    "indent": ["error", 2],
    "react/jsx-indent": ["error", 2],
  },
};
