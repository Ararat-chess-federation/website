import { IArticleText } from "./article";

export interface IAboutData {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  about: IArticleText[];
}
