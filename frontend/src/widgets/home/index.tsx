import { ArticleList } from "../../components/articleList/ArticleList";
import { IArticle } from "../../models/interfaces/article";
import styles from "./home.module.scss";

export async function HomePage(props: { data: IArticle[] }) {
  const { data } = props;
  return (
    <main>
      <div>
        <h2>Նորություններ</h2>
        <div className={styles.dottes} />
      </div>
      <section className={styles.articles_container}>
        <ArticleList data={data} />
      </section>
      {/* <MoreButton link="/articles" /> */}
      {/* <section className="region_info">
        <ShortInfo type="branches" />
        <ShortInfo type="trainers" />
      </section> */}
    </main>
  );
}
