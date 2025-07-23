import { IArticle } from "../../models/interfaces/article";
import Img from "../../shared/img/Img";
import styles from "./article.module.scss";
import MoreButton from "../../shared/moreButton";
import { ArticleItem } from "./ArticleItem";

export function ArticleList({ data }: { data: IArticle[] }) {
  if (!data) {
    return null;
  }

  return (
    <>
      {data.map((el) => (
        <ArticleItem key={el.id} {...el} />
      ))}
    </>
  );
}
