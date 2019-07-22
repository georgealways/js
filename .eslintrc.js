module.exports = {
    env: {
        browser: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: "module"
    },
    plugins: [ 
        "import" 
    ],
    rules: {
        "import/no-default-export": [ "error" ],
        "import/no-unresolved": [ "error" ],
        "import/named": [ "error" ],
        "import/default": [ "error" ],
        "import/extensions": [ "warn", "ignorePackages", { "js": "always" } ],
        "import/exports-last": [ "warn" ],
        "array-bracket-spacing": [ "warn", "always" ],
        "arrow-spacing": [ "warn" ],
        "brace-style": [ "warn", "1tbs" ],
        "comma-spacing": [ "warn" ],
        "comma-dangle": [ "warn", "never" ],
        "computed-property-spacing": [ "warn", "always" ],
        "eqeqeq": [ "warn", "always" ],
        "func-call-spacing": [ "warn", "never" ],
        "indent": [ "warn", 4, { "SwitchCase": 1 } ],
        "key-spacing": [ "warn", { "mode": "minimum" } ],
        "keyword-spacing": [ "warn" ],
        "linebreak-style": [ "warn", "unix" ],
        "new-parens": [ "warn" ],
        "no-extra-semi": [ "warn" ],
        "no-multiple-empty-lines": [ "warn" ],
        "no-trailing-spaces": [ "warn", { "ignoreComments": true } ],
        "no-undef": [ "error" ],
        "no-var": [ "warn" ],
        "object-curly-spacing": [ "warn", "always" ],
        "quotes": [ "warn", "single" ],
        "semi-spacing": [ "warn" ],
        "semi": [ "warn", "always" ],
        "space-before-function-paren": [ "warn", "never" ],
        "space-in-parens": [ "warn", "always", { "exceptions": [ "empty" ] } ],
        "space-infix-ops": [ "warn" ],
        
    }
}