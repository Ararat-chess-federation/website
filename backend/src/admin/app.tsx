import Logo from "./extensions/logo.png"; // ts error is ok: https://docs.strapi.io/cms/admin-panel-customization#basic-example
import type { StrapiApp } from "@strapi/strapi/admin";

export default {
  config: {
    locales: ["hy", "ru", "en"],
    head: {
      favicon: Logo,
    },
    auth: {
      logo: Logo,
    },
    menu: {
      logo: Logo,
    },
    tutorials: false,
    notifications: { releases: false },
    tour: { enable: false },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
