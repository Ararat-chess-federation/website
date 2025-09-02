import { useTranslations } from "next-intl";
import Pagination from "../../components/pagination/Pagination";
import { ArticleList } from "../../components/articleList";
import styles from "./Articles.module.scss";
import { IArticle } from "../../models/interfaces/article";
import { LinedTitle } from "../../shared/linedTitle";

interface IProps {
  data: IArticle[];
  page: number;
  pageSize: number;
  paginationTotal: number;
}

export default async function ArticlesPage(props: IProps) {
  const { data, page, pageSize, paginationTotal } = props;
  const t = useTranslations();
  return (
    <section className={styles.article_main}>
      <LinedTitle title={t("articles")} />
      <div>
        <ArticleList data={data} />
      </div>
      <Pagination
        basePath="/articles"
        currentPage={page}
        pageSize={pageSize}
        totalCount={paginationTotal}
      />
    </section>
  );
}
