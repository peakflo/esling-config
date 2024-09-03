module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
  rules: {
    "no-underscore-dangle": "off",
    "no-unused-vars": "off",
    "no-shadow": "off",
    "import/prefer-default-export": "off",
    "no-use-before-define": "off",
    "no-restricted-globals": "off",
    "no-restricted-syntax": "off",
    "consistent-return": "off",
    "no-continue": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "no-console": "off",
    camelcase: "off",
    "no-case-declarations": "off",
    "no-await-in-loop": "off",
    // TODO: enable
    // "@typescript-eslint/no-floating-promises": "error"
  },
  overrides: [{ files: ["*.ts"], rules: { "no-undef": "off" } }],
};
