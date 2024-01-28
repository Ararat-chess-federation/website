import { IImage } from "../models/interfaces/image";

export default function getImageSrc(image: { data: IImage }) {
  return `${process.env.BACKEND_URL}${image.data.attributes.formats.optimized.url}`;
}
