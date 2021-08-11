module.exports = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/graphql/:path*',
				destination: 'http://[::1]:3080/graphql/:path*',
			},
		]
	},
}
