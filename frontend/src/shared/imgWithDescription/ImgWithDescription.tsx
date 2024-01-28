import Image from "next/image";
import getImageSrc from "../../helpers/getImageSrc";
import { IImage } from "../../models/interfaces/image";
import Img from "../img/Img";

interface IImgWithDescriptionProps {
  description: string;
  image: { data: IImage };
  idx?: number;
}

export default function ImgWithDescription({
  idx,
  image,
  description,
}: IImgWithDescriptionProps) {
  return (
    <figure key={idx}>
      <Img width={200} height={200} src={image} alt={description} />
      <figcaption>{description}</figcaption>
    </figure>
  );
}
