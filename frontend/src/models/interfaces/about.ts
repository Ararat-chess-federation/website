import { IArticleText } from "./article";

export interface IAboutData {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    about: IArticleText[];
  };
}
