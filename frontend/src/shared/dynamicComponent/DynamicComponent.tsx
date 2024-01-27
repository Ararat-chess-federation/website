import Image from "next/image";
import Markdown from "react-markdown";
import getImageSrc from "../../helpers/getImageSrc";

interface IDynamicComponent {
  el: {
    __component: string;
    [key: string]: any;
  };
  idx?: number;
}

export default function DynamicComponent({ el, idx }: IDynamicComponent) {
  switch (el.__component) {
    case "text.paragraph":
      return <Markdown key={idx}>{el.paragraph}</Markdown>;

    case "img.img-with-description":
      return (
        <figure key={idx}>
          <Image
            width={100}
            height={100}
            src={getImageSrc(el)}
            alt={el.description}
          />
          <figcaption>{el.description}</figcaption>
        </figure>
      );

    default:
      return null;
  }
}
