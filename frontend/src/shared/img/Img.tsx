import Image from "next/image";
import getImageSrc from "../../helpers/getMediaSrc";
import { IImage } from "../../models/interfaces/image";

interface IImgProps {
  width: number;
  height: number;
  alt: string;
  src: IImage;
  className?: string;
  priority?: boolean;
}

export default function Img({
  width,
  height,
  alt,
  src,
  className = "",
  priority = false,
}: IImgProps) {
  return (
    <Image
      width={width}
      height={height}
      alt={alt}
      src={getImageSrc(src)}
      className={className}
      priority={priority}
      style={{
        aspectRatio: width / height,
        width: "100%",
        height: "auto",
        objectFit: "cover",
        maxHeight: `${height}px`,
        maxWidth: `${width}px`,
      }}
    />
  );
}
