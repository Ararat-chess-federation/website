import { IImage } from "../models/interfaces/image";

export default function getImageSrc(image: { data: IImage }) {
  console.log("getImageSrc", image);
  
  return `${process.env.BACKEND_URL}${image?.data?.attributes?.formats?.optimized?.url}`;
}
