import { IArticleText } from "./articleText";
import { IImage } from "./image";

export interface IArticle {
  id: string;
  attributes: {
    url: string;
    title: string;
    fbPost: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    publishDate: string;
    mainImage: IImage;
    articleText: IArticleText;
  };
}
