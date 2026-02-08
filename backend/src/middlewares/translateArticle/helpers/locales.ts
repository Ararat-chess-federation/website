import { DEFAULT_LOCALE_CODE } from "../constants/locale";
type tLocaleCode = "hy" | "ru" | "en";

export async function getLocalesList() {
    const localesData: { code: tLocaleCode }[] = await strapi.plugins.i18n.services.locales.find();

    return localesData
        .map((locale) => locale.code)
        .filter((localeCode) => localeCode !== DEFAULT_LOCALE_CODE)
}

export function getExistingLocales(localizations: { locale: tLocaleCode }[]) {
    return localizations.map((el) => el.locale);
}
