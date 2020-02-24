module.exports = {
    "extends": [
        "stylelint-config-standard",
        "stylelint-config-recommended-scss",
        "stylelint-config-idiomatic-order",
    ],
    "ignoreFiles": [
        "./node_modules/**/*.css",
        "./build/**/*.css",
    ],
    "rules": {
        "indentation": 4,
    },
};
