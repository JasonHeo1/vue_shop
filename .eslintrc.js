module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/standard",
    "eslint:recommended"
    // "eslint-config-prettier"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 'quotes': ['off', 'single'],
    // 'semi': 0,
    "space-before-function-paren": 0
    // "semi": [1, "always"]
    // "no-extra-semi": "error",
  }
};
