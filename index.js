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
    "no-unused-vars": 1
  }
}
