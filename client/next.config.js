const path = require('path')

require('dotenv').config({
	path: path.join(__dirname, '..', 'config', process.env.MODE + '.env'),
})

module.exports = {
	reactStrictMode: true,
	async rewrites() {
		if (process.env.MODE === 'prod') return []

		return [
			{
				source: '/api',
				destination: 'http://[::1]:' + process.env.BACKEND_PORT + '/api',
			},
		]
	},
}
