module.exports = {
    "extends": "airbnb-base",
    "ignorePatterns": [
        "node_modules/",
        "build/",
        "pano/",
    ],
    "rules": {
        "indent": [2, 4],
        "max-len": 0,
        "comma-dangle": ["error", "always-multiline"],
    },
    "env": {
        "browser": true,
    }
};
