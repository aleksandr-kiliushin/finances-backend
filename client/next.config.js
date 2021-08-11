module.exports = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/graphql',
				destination: 'http://[::1]:3080/graphql',
			},
		]
	},
}
