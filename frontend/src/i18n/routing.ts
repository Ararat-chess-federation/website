import { defineRouting } from "next-intl/routing";
export const locales = ["en", "hy", "ru"];

// export const routing = defineRouting({
//   locales,
//   defaultLocale: 'hy'
// });

export const routing = defineRouting({
  locales,
  defaultLocale: "hy",
  pathnames: {
    "/": "/",
    "/pathnames": {
      ru: "/ru",
      en: "/en",
      hy: "/hy",
    },
    "/about": "/about",
    "/articles": "/articles",
    "/branches": "/branches",
    "/contacts": "/contacts",
    "/calendar": "/calendar",
    "/ratings": "/ratings",
    "/trainers": "/trainers",
    "/userful": "/userful",
    "/error": "/error",
    "/articles/[articleUrl]": "/articles/[articleUrl]",
  },
});
