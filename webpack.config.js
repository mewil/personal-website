let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
let autoprefixer = require('autoprefixer');

let cssExtractor = new ExtractTextWebpackPlugin('./[name].css');
let lifecycleEvent = process.env.npm_lifecycle_event;

let devConfig = {
    entry: ['babel-polyfill', './app/app.js'],
    output: {
        publicPath: '/',
        path: path.resolve('./build'),
        filename: 'js/app.js'
    },
    devtool: 'source-map',
    resolve: {
      modules: ['web_modules', 'node_modules', 'app', 'static'],
      extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                enforce: 'pre',
                use: ['eslint-loader'],
                exclude: /(node_modules|static)/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader',
                    'postcss-loader?' + JSON.stringify(
                    [ autoprefixer({ browsers: ['last 3 versions'] }) ]
                )]
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components|static)/,
                use: ['babel-loader']
            },
            {
                test: /\.(eot|ttf|woff|woff2|otf)$/,
                use: 'url-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|woff|svg)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Build',
            template: './app/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        })
    ]
};

let buildConfig = {
    entry: ['babel-polyfill', './app/app.js'],
    output: {
        publicPath: '/',
        path: path.resolve('./build'),
        filename: 'js/app.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                enforce: 'pre',
                use: ['eslint-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: cssExtractor.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                    allChunks: true
                })
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },
            { test: /\.(png|jpg|jpeg|gif|woff|svg|otf)$/, use: 'file-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Build',
            template: './app/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new CleanWebpackPlugin(['build/brain.svg', 'build/fonts', 'build/js', 'build/styles', 'build/index.html']),
        cssExtractor,
        new CopyWebpackPlugin([
            { from: './static/brain.svg', to: './brain.svg' },
            { from: './static/particles.js', to: './particles.js' },
        ]),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 20000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace('@', '')}`;
            },
          },
        },
      },
    }
};

switch (lifecycleEvent) {
    case 'build':
    module.exports = buildConfig;
    break;
    default:
    module.exports = devConfig;
    break;
}
