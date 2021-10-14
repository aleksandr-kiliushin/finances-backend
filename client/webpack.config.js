const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devServer: {
		historyApiFallback: true,
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
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		alias: {
			'#views': path.resolve(process.cwd(), 'src/views'),
		},
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: 'src/index.html',
		}),
	],
}
