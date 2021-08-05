module.exports = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://[::1]:3080/api/:path*',
			},
		]
	},
}
