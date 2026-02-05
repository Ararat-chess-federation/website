import { TLang } from "./getData";
import { IImage } from "./image";

export interface IArticleText {
  id: number;
  __component: string;
  image?: IImage;
  paragraph?: string;
  description?: string;
  link?: string;
}

export interface IArticle {
  id: number;
  url: string;
  title: string;
  fbPost: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  publishDate: string;
  mainImage: IImage;
  articleText: IArticleText[];
  locale: TLang
}
