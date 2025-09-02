const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ararat.chessnews.am",
        port: "",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
      },
      {
        protocol: "https",
        hostname: "image.lichess1.org",
        port: "",
      },
    ],
  },
  sassOptions: {
    additionalData: `@use "styles/variables" as *;`,
  },
};

module.exports = withNextIntl(nextConfig);