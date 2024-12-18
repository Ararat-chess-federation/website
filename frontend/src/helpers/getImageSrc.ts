import { IImage } from "../models/interfaces/image";

export default function getImageSrc(image: { data: IImage }) {
  return `${process.env.NEXT_PUBLIC_BACKEND_URL}${image?.data?.attributes?.formats?.optimized?.url}`;
}
