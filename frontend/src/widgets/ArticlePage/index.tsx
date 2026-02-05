import Img from "../../../src/shared/img/Img";
import { dateFormatterByLang } from "../../helpers/dateFormatterByLang";
import { IArticle } from "../../models/interfaces/article";
import DynamicComponent from "../../shared/dynamicComponent/DynamicComponent";
import LinkButton from "../../shared/linkButton";
import styles from "./Article.module.scss";
import { FbPostLink } from "./FbPostLink";
import { Header } from "./Header";

type IArticleParams = Pick<
  IArticle,
  "title" | "mainImage" | "articleText" | "fbPost" | "publishedAt" | "locale"
>;

export default async function ArticlePage(props: IArticleParams) {
  const { title, mainImage, articleText, fbPost, publishedAt, locale } = props;
  const date = dateFormatterByLang(publishedAt, locale);

  return (
    <div className={styles.article_container}>
      <Header />

      <div className={styles.article_header}>
        <div className={styles.article_header_content}>
          <div className={styles.date_container}>
            <div className={styles.date}>
              <span className={styles.date_info}>{date}</span>
            </div>
          </div>
          <div className={styles.article_image}>
            <Img width={500} height={300} src={mainImage} alt={title} />
          </div>
        </div>
      </div>

      <div className={styles.article_content}>
        <h1 className={styles.article_title}>{title}</h1>
        <div className={styles.article_text_container}>
          {articleText.map((el) => (
            <span key={el.id} className={styles.article_text}>
              <DynamicComponent el={el} key={el.id} />
            </span>
          ))}
        </div>
      </div>

      {fbPost && (
        <div className={styles.article_footer}>
          <FbPostLink fbPost={fbPost} />
        </div>
      )}
    </div>
  );
}
