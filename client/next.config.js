/** @type {import('next').NextConfig} */
const API_ENDPOINT = process.env.SERVER_API_URL || ""

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
  async rewrites () {
    return [
      {
        source: "/api/:path*",
        destination: `${API_ENDPOINT}/:path*`,
      }
    ]
  }
}

export default nextConfig