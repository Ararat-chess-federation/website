import Image from "next/image";
import getImageSrc from "../../helpers/getImageSrc";
import { IImage } from "../../models/interfaces/image";

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
      <Image
        width={100}
        height={100}
        src={getImageSrc(image)}
        alt={description as string}
      />
      <figcaption>{description}</figcaption>
    </figure>
  );
}
