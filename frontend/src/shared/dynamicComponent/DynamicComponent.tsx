import ModifiedMarkdown from "../../hok/modifiedMarkdown";
import ChessGame from "../chessGame/ChessGame";
import ImgWithDescription from "../imgWithDescription/ImgWithDescription";
import { IArticleText } from "../../models/interfaces/article";
import { IImage } from "../../models/interfaces/image";

interface IDynamicComponent {
  el: IArticleText;
  idx?: number;
}

export default function DynamicComponent({ el, idx }: IDynamicComponent) {
  const { paragraph, description, image, __component, link } = el;

  switch (__component) {
    case "chess.chess-game-link":
      return <ChessGame key={idx} link={link as string} />;

    case "text.paragraph":
      return <ModifiedMarkdown key={idx}>{paragraph}</ModifiedMarkdown>;

    case "img.img-with-description":
      return (
        <ImgWithDescription
          description={description as string}
          image={image as IImage}
          idx={idx}
        />
      );

    default:
      return null;
  }
}
