module.exports = {
  "extends": "standard",
  "installedESLint": true,
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module"
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "mocha": true
  },
  "plugins": [
    "standard",
    "promise"
  ],
  "globals": {
    "_": false,
    "__appdir": false,
    "__appname": false,
    "config": false
  },

  "rules": {
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    "array-bracket-spacing": ["error", "never"],
    "object-property-newline": "error",
    "object-curly-spacing": ["error", "always"],
    "no-unused-vars": ["warn", { "args": "after-used" }],
  }
}
