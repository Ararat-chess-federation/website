import { IArticleText } from "./article";
import { IImage } from "./image";
import { ITrainer } from "./trainer";

export interface ITrainingDays {
  attributes: {
    url: string;
    address: string;
    mapUrl: string | null;
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    trainers: { data: ITrainer[] };
    mainImage: IImage;
    description: IArticleText[];
  };
}
