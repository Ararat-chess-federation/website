import Image from "next/image";
import getImageSrc from "../../helpers/getMediaSrc";
import { IImage } from "../../models/interfaces/image";
import Img from "../img/Img";

interface IImgWithDescriptionProps {
  description: string;
  image: IImage;
  idx?: number;
}

export default function ImgWithDescription({
  idx,
  image,
  description,
}: IImgWithDescriptionProps) {
  const { width, height } = image.formats.optimized;
  const imgWidth = width < 500 ? width : 500;
  const imgHeight = height < 300 ? height : 300;

  return (
    <figure key={idx}>
      <Img width={imgWidth} height={imgHeight} src={image} alt={description} />
      <figcaption>{description}</figcaption>
    </figure>
  );
}
