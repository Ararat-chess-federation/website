import { ArticleList } from "../../components/articleList";
import { IArticle } from "../../models/interfaces/article";
import styles from "./home.module.scss";

export async function HomePage(props: { data: IArticle[] }) {
  const { data } = props;
  return (
    <main className={styles.home_main}>
      <div className={styles.title_container}>
        <h2>Նորություններ</h2>
        <div className={styles.free_line} />
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
