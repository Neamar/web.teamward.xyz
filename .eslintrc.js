module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
        "mocha": true,
        "es6": true
    },
    "rules": {
        "arrow-parens": [
            "error",
            "always"
        ],
        "arrow-body-style": [
            2,
            "as-needed"
        ],
        "comma-dangle": [
            2,
            "always-multiline"
        ],
        "import/imports-first": 0,
        "import/newline-after-import": 0,
        "import/no-extraneous-dependencies": 0,
        "import/no-named-as-default": 0,
        "import/no-unresolved": 1,
        "import/prefer-default-export": 0,
        "indent": [
            2,
            2,
            {
                "SwitchCase": 1
            }
        ],
        "max-len": 0,
        "newline-per-chained-call": 0,
        "no-console": 1,
        "no-use-before-define": 0,
        "prefer-template": 2,
        "class-methods-use-this": 0,
        "react/forbid-prop-types": 0,
        "react/jsx-first-prop-new-line": [
            2,
            "multiline"
        ],
        "react/jsx-filename-extension": 0,
        "react/jsx-no-target-blank": 0,
        "react/require-extension": 0,
        "react/self-closing-comp": 0,
        "require-yield": 0,
        "no-extra-parens": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "no-plusplus": 0,
        "react/prefer-stateless-function": 0,
        "react/prop-types": 0,
        "prefer-destructuring": 0,
        "no-debugger": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0
    }
};