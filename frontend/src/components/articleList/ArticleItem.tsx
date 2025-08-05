import { IArticle } from "../../models/interfaces/article";
import Img from "../../shared/img/Img";
import styles from "./article.module.scss";
import MoreButton from "../../shared/linkButton";
import { dateArmFormater } from "../../helpers/dateArmFormater";

export function ArticleItem(props: IArticle) {
  const { mainImage, url, title, publishedAt } = props;
  const date = dateArmFormater(publishedAt);

  return (
    <div key={url} className={styles.article_card}>
      <div className={styles.article_photo}>
        <Img width={316} height={260} src={mainImage} alt={url} className={styles.photo} />
      </div>

      <div className={styles.name_container}>
        <h3 className={styles.article_name}>{title}</h3>
      </div>
      <div className={styles.published_data}>
        <span>{date}</span>
      </div>
      <div className={styles.btn_container}>
        <MoreButton link={`/articles/${url}`} />
      </div>
    </div>
  );
}
