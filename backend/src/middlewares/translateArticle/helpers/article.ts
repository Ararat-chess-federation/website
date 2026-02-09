export async function getArticle({ uid, documentId }) {
    return strapi.documents(uid).findOne({
        documentId: documentId,
        populate: ["articleText", "localizations", "mainImage"],
    });
}

export async function addLocalization({ article, uid, locale, translatedDynamicZones }) {
    await strapi.documents(uid).update({
        documentId: article.documentId,
        locale: locale,
        data: {
            title: article.title, // TODO: translate title
            url: article.url,
            mainImage: article.mainImage,
            articleText: translatedDynamicZones
        } as any, // TODO: fix ts
    });
}