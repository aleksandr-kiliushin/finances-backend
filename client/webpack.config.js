const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devServer: {
		historyApiFallback: true,
		port: 3000,
	},
	devtool: 'source-map',
	entry: './src/index.tsx',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	output: {
		chunkFilename: '[id].[chunkhash].js',
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		sourceMapFilename: '[name].js.map',
	},
	resolve: {
		extensions: ['.css', '.js', '.jsx', '.ts', '.tsx'],
		alias: {
			'#components': path.resolve(process.cwd(), 'src/components'),
			'#views': path.resolve(process.cwd(), 'src/views'),
		},
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: 'src/index.html',
		}),
	],
}
