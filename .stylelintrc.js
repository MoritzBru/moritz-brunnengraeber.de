module.exports = {
    "plugins": [
        "stylelint-scss",
    ],
    "extends": [
        "stylelint-config-standard",
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
