import { IImage } from "./image";
import { ITrainer } from "./trainer";

export interface IBranch {
  id: number;
  attributes: {
    url: string;
    address: string;
    mapUrl?: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    trainers: ITrainer[];
    mainImage: IImage;
  };
}
