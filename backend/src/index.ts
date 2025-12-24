import type { Core } from "@strapi/strapi";

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
        const article = await strapi.documents(context.uid).findOne({
          documentId: context.params.documentId,
          populate: ["articleText", "localizations", "mainImage"],
        });

        const translatedDynamicZones = getTranslatedDynamicZones(article.articleText);

        await strapi.documents(context.uid).update({
          documentId: article.documentId,
          locale: 'en',
          data: {
            title: "en",
            url: article.url,
            mainImage: article.mainImage,
            articleText: translatedDynamicZones
          },
        });

        return next()
      }

      return next()
    })
  },
};

function translateParagraphs(articleText: string, locale: "ru" | "en") {
  return `${articleText} in language: ${locale}`
}

function getTranslatedDynamicZones(dynamicZones) {
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
      paragraph: translateParagraphs(dynamicZone.paragraph, "en"),
    });
  }

  return translatedDynamicZones;
}