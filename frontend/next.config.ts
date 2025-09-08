// const createNextIntlPlugin = require("next-intl/plugin");
// const { routing } = require("./i18n/routing");
import createNextIntlPlugin from "next-intl/plugin";
import { routing } from "./i18n/routing.js";
import { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

// /** @type {import('next').NextConfig} */

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
// module.exports = withNextIntl(nextConfig);
