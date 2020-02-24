const htmlminifier = require("html-minifier");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/pano");
    eleventyConfig.addPassthroughCopy("src/.htaccess");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addShortcode("age", (birthdateString) => { 
        const today = new Date();
        const birthDate = new Date(birthdateString);
        const age = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24 * 365.25))
        return age;
     });
    eleventyConfig.addTransform("htmlminifier", (content, outputPath) => {
        if ( outputPath.endsWith(".html") ) {
            const minified = htmlminifier.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            });
            return minified;
        }
        return content;
    });
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
