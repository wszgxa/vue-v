var webpack = require("webpack"),
    version = require("./package.json").version;

var banner =
    "/**\n" +
    " * vue-v v" + version + "\n" +
    " * https://github.com/wszgxa/vue-v\n" +
    " * Released under the MIT License.\n" +
    " */\n";

module.exports = [

    {
        entry: "./src/index",
        output: {
            path: "./dist",
            filename: "vue-v.js",
        },
        plugins: [
            new webpack.BannerPlugin(banner, {raw: true})
        ]
    },

    {
        entry: "./src/index",
        output: {
            path: "./dist",
            filename: "vue-v.min.js",
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin,
            new webpack.BannerPlugin(banner, {raw: true})
        ]
    }

];