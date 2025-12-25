import type { Core } from "@strapi/strapi";
import axios from "axios"

const DEFAULT_LOCALE_CODE = "hy";
const ARMENIAN_END_OF_SENTENCE = "։"
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

          const translatedDynamicZones = await getTranslatedDynamicZones({ dynamicZones: article.articleText, locale });
          await addLocalization({ article, locale, translatedDynamicZones, uid })
        }

        return next()
      }

      return next()
    })
  },
};

async function addLocalization({ article, uid, locale, translatedDynamicZones }) {
  const translatedTitle = await translateText(article.title, locale);
  await strapi.documents(uid).update({
    documentId: article.documentId,
    locale: locale,
    data: {
      title: translatedTitle as any,
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

async function translateText(text: string, locale: "ru" | "en") {
  const fullText = [];
  const textSplits = text.split("\n");

  for await (const textSplit of textSplits) {
    if (textSplit.trim() === "") {
      fullText.push(textSplit);
      continue
    }
    const url = `https://api.mymemory.translated.net/get?q=${textSplit}&langpair=hy|${locale}`
    const translation = await axios.get(url);
    fullText.push(translation.data.responseData.translatedText)
  }

  return fullText.join("\n");
}

async function getTranslatedDynamicZones({ dynamicZones, locale }) {
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
    const translatedParagraph = await translateText(dynamicZone.paragraph, locale);
    translatedDynamicZones.push({
      __component: "text.paragraph",
      paragraph: translatedParagraph
    });
  }

  return translatedDynamicZones;
}