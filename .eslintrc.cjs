{
  "root": true
  "parser": "typescript-eslint/parser",
  "plugins": ["typescript-eslint", "prettier"],
  "extends": [
    "eslint:recommended",
    "plugin:typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "prettier/prettier": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"]
  }
}
