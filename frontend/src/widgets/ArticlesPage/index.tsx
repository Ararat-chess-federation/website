import Pagination from "../../components/pagination/Pagination";
import { ArticleList } from "../../components/articleList";
import styles from "./Articles.module.scss";
import { IArticle } from "../../models/interfaces/article";
import { Header } from "./Header";

interface IProps {
  data: IArticle[];
  page: number;
  pageSize: number;
  paginationTotal: number;
}

export default function ArticlesPage(props: IProps) {
  const { data, page, pageSize, paginationTotal } = props;
  return (
    <section className={styles.article_main}>
      <Header />
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
