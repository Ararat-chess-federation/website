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
      const { uid, action } = context
      if (uid !== "api::article.article") {
        return next();
      }

      if (action === "publish") {
        const { params } = context;
        const { documentId, locale } = params;
        if (locale !== DEFAULT_LOCALE_CODE) {
          return next()
        }

        const article = await getArticle({ uid, documentId });
        const existingLocales = getExistingLocales(article.localizations)
        const localesList = await getLocalesList();

        for await (const locale of localesList) {
          if (existingLocales.includes(locale)) {
            continue;
          }

          const translatedDynamicZones = getTranslatedDynamicZones({ dynamicZones: article.articleText, locale });
          await addLocalization({ article, locale, translatedDynamicZones, uid })
        }

        return next()
      }

      return next()
    })
  },
};

async function addLocalization({ article, uid, locale, translatedDynamicZones }) {
  await strapi.documents(uid).update({
    documentId: article.documentId,
    locale: locale,
    data: {
      title: translateText(article.title, locale) as any,
      url: article.url,
      mainImage: article.mainImage,
      articleText: translatedDynamicZones
    },
  });
}

function getExistingLocales(localizations) {
  return localizations.map((el) => el.locale);
}

async function getArticle({ uid, documentId }) {
  return strapi.documents(uid).findOne({
    documentId: documentId,
    populate: ["articleText", "localizations", "mainImage"],
  });

}

async function getLocalesList() {
  const localesData = await strapi.plugins.i18n.services.locales.find();

  return localesData
    .map((locale) => locale.code)
    .filter((localeCode) => localeCode !== DEFAULT_LOCALE_CODE)
}

function translateText(text: string, locale: "ru" | "en") {
  return `${text} in language: ${locale}`
}

function getTranslatedDynamicZones({ dynamicZones, locale }) {
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