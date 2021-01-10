const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/scripts/widget.ts',
    output: {
        filename: 'widget.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test:/\.(s*)css$/,
                use: [
                    miniCss.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
        ],
    },
    plugins: [
        new miniCss({
            filename: 'widgetstyles.css',
        }),
        new CopyPlugin({
            patterns: [
                {from: 'src/html'},
            ],
        }),
    ],
};
