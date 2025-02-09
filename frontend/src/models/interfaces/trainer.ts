import { IBranch } from "./branch";
import { IImage } from "./image";

export interface ITrainer {
  id: number;
  url: string;
  fullName: string;
  bio: string;
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  branches: IBranch[];
  profilePhoto: IImage;
}
