import { useTranslations } from "next-intl";
import { IArticle } from "../../models/interfaces/article";
import { LinedTitle } from "../../shared/linedTitle";
import ArticleCarousel from "./components/Carousel";
import { ChessMapCard } from "./components/ChessMapCard";
import { LinedItem } from "./components/LinedItem";
import styles from "./home.module.scss";
import { getTranslations } from "next-intl/server";

export async function HomePage(props: { data: IArticle[] }) {
  const { data } = props;
  const t = await getTranslations();
  return (
    <main className={styles.home_main}>
      <section>
        <ChessMapCard />
      </section>
      <section className={styles.main_content}>
        <LinedTitle title={t("articles")} />
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
