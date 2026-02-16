import { ILocalizationProps, TArticleUid } from "../models";

export async function getArticle({ uid, documentId }: { uid: TArticleUid, documentId: string }) {
    return strapi.documents(uid).findOne({
        documentId: documentId,
        populate: ["articleText", "localizations", "mainImage"],
    });
}

export async function addLocalization({ article, uid, locale, translatedDynamicZones }: ILocalizationProps) {
    await strapi.documents(uid).update({
        documentId: article.documentId,
        locale: locale,
        data: {
            title: article.title, // TODO: translate title
            url: article.url,
            mainImage: article.mainImage,
            articleText: translatedDynamicZones,
            fbPost: article.fbPost,
        },
    });
}