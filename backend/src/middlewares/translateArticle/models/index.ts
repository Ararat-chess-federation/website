import type { Core, Data } from '@strapi/strapi';

export type TArticleUid = "api::article.article";
export type TLocaleCode = "hy" | "ru" | "en";
export type DocumentMiddleware = Parameters<Core.Strapi['documents']['use']>[0];
export type DocumentContext = Parameters<DocumentMiddleware>[0];
export type ArticleEntity = Data.ContentType<TArticleUid>;

export interface ILocalizationProps {
    article: ArticleEntity,
    uid: TArticleUid,
    locale: TLocaleCode,
    translatedDynamicZones: ArticleEntity["articleText"]
}

export interface ITranslatedDynamicZonesProps {
    dynamicZones: ArticleEntity["articleText"],
    locale: TLocaleCode
}
