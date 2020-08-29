const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const jsRule = {
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: [
        {
            loader: 'babel-loader',
        }
    ],

};

const _modules = {
    rules: [jsRule]
}

const entry = {
    main: './src/client.js'
}
const output = {
    path: path.join(__dirname, 'public/')
}

module.exports = {
    entry,
    output,
    module: _modules,
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
}