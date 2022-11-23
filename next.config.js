/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '2022gradshow.s3.ap-southeast-1.amazonaws.com',
        // port: '',
        // pathname: '',
      },
    ],
  },
}
