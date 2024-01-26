import Image from "next/image";
import Markdown from "react-markdown";

export default function DynamicComponent({
  el,
  idx,
}: {
  el: any;
  idx?: number;
}) {
  switch (el.__component) {
    case "text.paragraph":
      return <Markdown key={idx}>{el.paragraph}</Markdown>;

    case "img.img-with-description":
      return (
        <figure key={idx}>
          <Image
            width={100}
            height={100}
            src={`${process.env.BACKEND_URL}${el.image.data.attributes.url}`}
            alt={el.description}
          />
          <figcaption>{el.description}</figcaption>
        </figure>
      );

    default:
      return null;
  }
}
