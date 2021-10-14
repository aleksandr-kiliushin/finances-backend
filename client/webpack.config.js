const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	mode: 'production',
	output: {
		filename: 'bundle.js',
		path: path.resolve('dist'),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.html$/,
				use: 'html-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: 'src/index.html',
		}),
	],
}
