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

const cssRule = {
    test: /\.css$/,
    use: [{
        loader: 'style-loader'
    }, {
        loader: 'css-loader',
        options: { sourceMap: true, importLoaders: 1 }
    }]
}

const scssRule = {
    test: /\.scss$/,
    use: [
        "style-loader",
        {
            loader: "css-loader",
            options: {
                sourceMap: true
            }
        },
        {
            loader: 'sass-loader',
            options: { sourceMap: true, importLoaders: 1 }
        }]
}

const fileLoaderRules = {
    test: /\.(gif|jpg|png|ico)$/,
    use:[{
            loader : "file-loader",
        }]
}

const _modules = {
    rules: [jsRule, cssRule, scssRule ,fileLoaderRules]
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