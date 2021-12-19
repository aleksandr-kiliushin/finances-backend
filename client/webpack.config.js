const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { SourceMapDevToolPlugin } = require('webpack')

module.exports = {
	devServer: {
		historyApiFallback: true,
		port: process.env.FRONTEND_PORT,
		proxy: {
			// http://[Service name of backend in compose.dev.yml]:[backend port].
			'/api': `http://backend:${process.env.BACKEND_PORT}`,
		},
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
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[local]__[hash:base64:5]',
							},
						},
					},
				],
			},
		],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		sourceMapFilename: '[name].js.map',
	},
	resolve: {
		extensions: ['.css', '.js', '.jsx', '.ts', '.tsx'],
		alias: {
			'#components': path.resolve(process.cwd(), 'src/components'),
			'#interfaces/*': path.resolve(process.cwd(), '../server/src/interfaces/'),
			'#models': path.resolve(process.cwd(), 'src/models'),
			'#views': path.resolve(process.cwd(), 'src/views'),
			'#utils': path.resolve(process.cwd(), 'src/utils'),
		},
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: 'public/index.html',
		}),
		new SourceMapDevToolPlugin({
			filename: '[file].map[query]',
		}),
	],
}
