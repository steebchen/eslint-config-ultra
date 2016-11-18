module.exports = {
  "extends": "standard",
  "installedESLint": true,
  "parserOptions": {
    "ecmaVersion": 6,
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
    "express": false,
    "args": false,
    "Moment": false,
    "Time": false,
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
