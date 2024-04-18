/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.PROTOCOL,
        hostname: process.env.HOST_NAME,
        port: process.env.PORT,
      },
    ],
  },
};
