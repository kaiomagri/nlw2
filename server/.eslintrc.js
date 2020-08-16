module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    "no-underscore-dangle": "off",
      "prettier/prettier": "error",
      "class-methods-use-this": "off",
      "camelcase": 'off',
      "@typescript-eslint/camelcase": "off",
      "no-useless-constructor": "off",
      "@typescript-eslint/no-unused-vars": ["error", {
        "argsIgnorePattern": "_"
      }],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "ts": "never"
        }
      ]
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }

};
