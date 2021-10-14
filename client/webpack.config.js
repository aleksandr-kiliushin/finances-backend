const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devServer: {
		port: 3000,
	},
	entry: './src/index.tsx',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
		],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: 'src/index.html',
		}),
	],
}
