import Link from "next/link";
import { IArticle } from "../../models/interfaces/article";
import Img from "../../shared/img/Img";
import styles from "./article.module.scss";

export function ArticleList({ data }: { data: IArticle[] }) {
  if (!data) {
    return null;
  }

  return (
    <>
      {data.map(({ url, mainImage, title }) => {
        return (
          <div key={url} className={styles.article_card}>
            <div className={styles.article_photo}>
              <Img width={316} height={260} src={mainImage} alt={url} />
            </div>

            {/* <Link href={`/articles/${url}`}> */}
            <div className={styles.name_container}>
              <h3 className={styles.article_name}>{title}</h3>
            </div>
            {/* </Link> */}
          </div>
        );
      })}
    </>
  );
}
