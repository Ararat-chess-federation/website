import createNextIntlPlugin from "next-intl/plugin";
import { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
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

export default withNextIntl(nextConfig);
