import type { Core } from "@strapi/strapi";

const DEFAULT_LOCALE_CODE = "hy";
export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }: { strapi: Core.Strapi }) {
    strapi.documents.use(async (context, next) => {
      if (context.uid !== "api::article.article") {
        return next();
      }


      if (context.action === "publish") {
        if (context.params.locale !== DEFAULT_LOCALE_CODE) {
          return next()
        }

        const article = await strapi.documents(context.uid).findOne({
          documentId: context.params.documentId,
          populate: ["articleText", "localizations", "mainImage"],
        });

        const existingLocalizations = article.localizations.map((el) => el.locale);

        const localesList = await getLocalesList();

        for await (const locale of localesList) {
          if (existingLocalizations.includes(locale)) {
            continue;
          }

          const translatedDynamicZones = getTranslatedDynamicZones(article.articleText, locale);
          await strapi.documents(context.uid).update({
            documentId: article.documentId,
            locale: locale,
            data: {
              title: translateText(article.title, locale),
              url: article.url,
              mainImage: article.mainImage,
              articleText: translatedDynamicZones
            },
          });
        }

        return next()
      }

      return next()
    })
  },
};

async function getLocalesList() {
  const localesData = await strapi.plugins.i18n.services.locales.find();
  console.log({ localesData });

  return localesData
    .map((locale) => locale.code)
    .filter((localeCode) => localeCode !== DEFAULT_LOCALE_CODE)
}

function translateText(text: string, locale: "ru" | "en") {
  return `${text} in language: ${locale}`
}

function getTranslatedDynamicZones(dynamicZones, locale) {
  const translatedDynamicZones = [];

  for (const dynamicZone of dynamicZones) {
    const { __component } = dynamicZone;

    if (__component !== "text.paragraph") {
      translatedDynamicZones.push({
        __component,
        ...dynamicZone,
      });

      continue;
    }

    translatedDynamicZones.push({
      __component: "text.paragraph",
      paragraph: translateText(dynamicZone.paragraph, locale),
    });
  }

  return translatedDynamicZones;
}