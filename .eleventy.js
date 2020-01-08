module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: "src",
            output: "build",
            includes: "_includes",
            layouts: "_layouts",
            data: "_data",
        },
        htmlTemplateEngine: "liquid",
        templateFormats: [
            "html",
            "liquid"
        ],
    };
};
