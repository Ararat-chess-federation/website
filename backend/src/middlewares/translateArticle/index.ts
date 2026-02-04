import { DEFAULT_LOCALE_CODE } from "./constants/locale";
import { getExistingLocales, getLocalesList } from "./helpers/locales";
import { addLocalization, getArticle } from "./helpers/article";
import { getTranslatedDynamicZones } from "./helpers/dynamicZones";

export default async function translateArticle(context, next) {
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
}
