import { IImage } from "./image";

export interface ITopicItem {
  id: number;
  documentId: string;
  title: string;
  content: string;
  mainImage?: IImage | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
