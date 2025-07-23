import { IArticle } from "../../models/interfaces/article";
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
