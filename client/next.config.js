// require('dotenv').config()// in .env API_URL=http://localhost:4200

module.exports = {
	reactStrictMode: true,
	// we can access API_URL as process.env.API_URL
	// env: {
	// 	API_URL: process.env.API_URL,
	// },
	async rewrites() {
		return [
			{
				source: '/graphql',
				destination: 'http://[::1]:3080/graphql',
			},
		]
	},
}
