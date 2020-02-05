const path = require("path");

module.exports = {
    entry: "./js/app.js",
    output: {
        filename: "bundle.min.js",
        path: path.resolve(__dirname, "./dist/js")
    },
    module: {
        rule: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    }
}
