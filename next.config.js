/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cocktails-generator.s3.amazonaws.com',
        port: '',
        pathname: '**'
      }
    ]
  },
  productionBrowserSourceMaps: true
}
