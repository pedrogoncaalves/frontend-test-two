/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  remoteImages: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.correio24horas.com.br',
        port: '',
        pathname: '/fileadmin/user_upload/correio24horas/2022/09/30/040b7839fa9f18bc54c02bab020a8f2a.jpg',
      },
    ],
  },
}



 


module.exports = nextConfig
