const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.tsx',
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['react', ['es2015', { modules: false }], 'es2016'],
						},
					},
					{
						loader: 'ts-loader',
					},
				],
			},
		],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist'),
		// path: path.resolve('dist'),
	},
	resolve: {
		extensions: ['.ts', '.tsx'],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: 'src/index.html',
		}),
	],
}
