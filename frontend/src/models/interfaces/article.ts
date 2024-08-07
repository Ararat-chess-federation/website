import { IImage } from "./image";

export interface IArticleText {
  id: number;
  __component: string;
  image?: {
    data: IImage;
  };
  paragraph?: string;
  description?: string;
  link?: string;
}

export interface IArticle {
  id: number;
  attributes: {
    url: string;
    title: string;
    fbPost: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    publishDate: string;
    mainImage: { data: IImage };
    articleText: IArticleText[];
  };
}
