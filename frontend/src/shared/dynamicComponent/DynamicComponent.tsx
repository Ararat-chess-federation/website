import Markdown from "react-markdown";
import { IArticleText } from "../../models/interfaces/article";
import { IImage } from "../../models/interfaces/image";
import ImgWithDescription from "../imgWithDescription/ImgWithDescription";

interface IDynamicComponent {
  el: IArticleText;
  idx?: number;
}

export default function DynamicComponent({ el, idx }: IDynamicComponent) {
  const { paragraph, description, image, __component } = el;

  switch (__component) {
    case "text.paragraph":
      return <Markdown key={idx}>{paragraph}</Markdown>;

    case "img.img-with-description":
      return (
        <ImgWithDescription
          description={description as string}
          image={image as { data: IImage }}
          idx={idx}
        />
      );

    default:
      return null;
  }
}
