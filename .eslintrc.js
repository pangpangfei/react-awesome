module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        },
        "ecmaVersion": 8,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "parser": "babel-eslint",
    "rules": {
        "react/jsx-uses-react": "error", "react/jsx-uses-vars": "error",
        "no-console": 0,
        "comma-dangle": [1, "never"],
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-case-declarations": 2,
        "no-empty": 2,
        "no-empty-character-class": 2,
        "no-ex-assign": 2,
        "no-func-assign": 2,
        "no-invalid-regexp": 2,
        "no-negated-in-lhs": 2,
        "no-obj-calls": 2,
        "no-unreachable": 2,
        "use-isnan": 2,
        "valid-typeof": 2,
        "eqeqeq": [2, "allow-null"],
        "no-empty-function": 2,
        "no-native-reassign": 2,
        "no-redeclare": 2,
        "no-undef-init": 2,
        "computed-property-spacing": [2, "never"],
        "consistent-this": [1, "self"],
        "key-spacing": [2, {
            "beforeColon": false,
            "afterColon": true
        }],
        "no-unused-vars": [2, {
            "vars": "all",
            "args": "none"
        }],
        "new-cap": [2, {
            "newIsCap": true,
            "capIsNew": false
        }],
        "no-mixed-spaces-and-tabs": 2,
        "no-var": 0,
        "indent": [2, 2, {
            "SwitchCase": 1
        }],
        "space-unary-ops": [2, {
            "words": true,
            "nonwords": false
        }],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single",
            { "allowTemplateLiterals": true }
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};