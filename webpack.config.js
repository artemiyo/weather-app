const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: 'build'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: devMode ? '[name].css' : '[name].[hash].css',
			chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
		  }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
					loader: 'babel-loader',
                }
			}, {
				test: /\.(sa|sc|c)ss$/,
				use: [
				  {
					loader: MiniCssExtractPlugin.loader,
					options: {
					  hmr: process.env.NODE_ENV === 'development',
					},
				  },
				  'css-loader',
				  'sass-loader',
				],
			},
        ],
    },
};
