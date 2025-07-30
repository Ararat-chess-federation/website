import { IArticle } from "../../models/interfaces/article";
import { ArticleItem } from "./ArticleItem";
import styles from './article.module.scss'

export function ArticleList({ data }: { data: IArticle[] }) {
  if (!data) {
    return null;
  }

  return (
    <div className={styles.articles}>
      {data.map((el) => (
        <ArticleItem key={el.id} {...el} />
      ))}
    </div>
  );
}
