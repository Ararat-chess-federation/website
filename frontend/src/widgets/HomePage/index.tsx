import { IArticle } from "../../models/interfaces/article";
import ArticleCarousel from "./components/Carousel";
import { ChessMapCard } from "./components/ChessMapCard";
import { LinedItem } from "./components/LinedItem";
import { Header } from "./Header";
import styles from "./home.module.scss";

export async function HomePage(props: { data: IArticle[] }) {
  const { data } = props;
  return (
    <main className={styles.home_main}>
      <section>
        <ChessMapCard />
      </section>
      <section className={styles.main_content}>
        <Header />
        <div className={styles.articles_container}>
          <ArticleCarousel data={data} />
        </div>
      </section>
      <section className={`${styles.main_content} ${styles.more_content}`}>
        <LinedItem versionIndex={0} />
        <LinedItem versionIndex={1} />
      </section>
    </main>
  );
}
