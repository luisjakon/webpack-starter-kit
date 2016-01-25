var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: [
        './app'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app/js/[name]-[hash].js',
        chunkFilename: '[name]-[chunkhash].js',
        publicPath: '/'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve('./', './app/index.tpl.html')
        })
    ],
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel']
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'eslint-loader'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.sass$/,
            loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap&indentedSyntax'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }]
    }
};
