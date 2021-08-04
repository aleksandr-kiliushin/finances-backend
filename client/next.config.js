module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://0.0.0.0:3080/api/:path*',
        // destination: 'http://localhost:3080/api/:path*',
      },
    ]
  }
}
