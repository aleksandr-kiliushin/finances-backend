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
			// {
			// 	test: /\.css$/,
			// 	use: [
			// 		'style-loader',
			// 		{
			// 			loader: 'css-loader',
			// 			options: {
			// 				importLoaders: 1,
			// 				modules: true,
			// 			},
			// 		},
			// 	],
			// 	include: /\.module\.css$/,
			// },
			// {
			// 	test: /\.css$/,
			// 	use: ['style-loader', 'css-loader'],
			// 	exclude: /\.module\.css$/,
			// },
		],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	resolve: {
		extensions: ['.css', '.js', '.jsx', '.ts', '.tsx'],
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
