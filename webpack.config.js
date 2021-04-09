const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const devConfig = {
    entry: ['./app/app.tsx'],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        publicPath: '/',
        path: path.resolve('./build'),
        filename: 'js/app.js'
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Build',
            template: './app/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new CopyWebpackPlugin({
            patterns: [
            { from: './static/brain.svg', to: './brain.svg' },
            { from: './static/particles.js', to: './particles.js' },
        ]}),
    ]
};

const buildConfig = {
    entry: ['./app/app.tsx'],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        publicPath: '/',
        path: path.resolve('./build'),
        filename: 'js/app.js'
    },
    devtool: 'inline-source-map',
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
            { from: './static/brain.svg', to: './brain.svg' },
            { from: './static/particles.js', to: './particles.js' },
        ]}),
        new HtmlWebpackPlugin({
            title: 'Webpack Build',
            template: './app/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:[
                'build/brain.svg', 'build/fonts', 'build/js', 'build/styles', 'build/index.html'
            ]
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    optimization: {
      minimize: true
    }
};

switch (process.env.npm_lifecycle_event) {
    case 'build':
    module.exports = buildConfig;
    break;
    default:
    module.exports = devConfig;
    break;
}
