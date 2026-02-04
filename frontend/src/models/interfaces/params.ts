import { TLang } from "./getData";

export type TPages =
    "about" |
    "articles" |
    "contacts" |
    "useful" |
    "ratings" |
    "calendar" |
    "trainers" |
    "notFound" |
    "branches";

export interface IPageProps {
    params: Promise<{ locale: TLang }>;
}

export interface IArticlesProps extends IPageProps {
    searchParams: Promise<{
        page: string;
    }>;
}

export interface IBranchesProps extends IPageProps {
    searchParams: Promise<{
        page: string;
    }>;
}

export interface IArticleProps extends IPageProps {
    params: Promise<{ articleUrl: string, locale: TLang }>;
}

export type IPageMetadata = {
    [page in TPages]: {
        [lang in TLang]: {
            title: string,
            description: string
        };
    };
};