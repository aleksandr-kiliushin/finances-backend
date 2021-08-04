module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://[::1]:3080/api/:path*',
      },
    ]
  }
}
