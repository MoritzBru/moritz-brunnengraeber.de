const htmlminifier = require("html-minifier");
const fs = require("fs");
const path = require("path");

const manifestPath = path.resolve(__dirname, "build", "assets", "manifest.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

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

    eleventyConfig.addShortcode("webpackAsset", (name) => {
        if (!manifest[name]) {
            throw new Error(`Asset ${name} does not exist in ${manifestPath}`);
        }
        return manifest[name];
    });

    if (process.env.ELEVENTY_ENV === 'production') {
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
    }

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
