import { IImage } from "./image";

export interface IAboutData {
  id: number;
  __component: string;
  description: string;
  image: IImage;
}
