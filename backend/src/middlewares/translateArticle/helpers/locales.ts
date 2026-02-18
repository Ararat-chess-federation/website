import { DEFAULT_LOCALE_CODE } from "../constants/locale";
import { ArticleEntity, TLocaleCode } from "../models";

export async function getLocalesList() {
    const localesData: { code: TLocaleCode }[] = await strapi.plugins.i18n.services.locales.find();

    return localesData
        .map((locale) => locale.code)
        .filter((localeCode) => localeCode !== DEFAULT_LOCALE_CODE)
}

export function getExistingLocales(localizations: ArticleEntity["localizations"]) {
    return localizations.map((el) => el.locale);
}
