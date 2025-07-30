import { ArticleList } from "../../components/articleList";
import { IArticle } from "../../models/interfaces/article";
import { ChessMapCard } from "./components/ChessMapCard";
import { LinedItem } from "./components/LinedItem";
import styles from "./home.module.scss";

export async function HomePage(props: { data: IArticle[] }) {
  const { data } = props;
  return (
    <main className={styles.home_main}>
      <section>
        <ChessMapCard />
      </section>
      <section className={styles.main_content}>
        <div className={styles.title_container}>
          <h2>Նորություններ</h2>
          <div className={styles.free_line} />
        </div>
        <div className={styles.articles_container}>
          <ArticleList data={data} />
        </div>
      </section>
      <section className={`${styles.main_content} ${styles.more_content}`}>
        <LinedItem versionIndex={0} />
        <LinedItem versionIndex={1} />
      </section>
      {/* <MoreButton link="/articles" /> */}
      {/* <section className="region_info">
        <ShortInfo type="branches" />
        <ShortInfo type="trainers" />
      </section> */}
    </main>
  );
}
