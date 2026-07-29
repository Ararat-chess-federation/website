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
  const { createdBy } = data[0];
  const headerTitle = createdBy ? "blog" : "articles";
  const basePath = createdBy ? "/blogs" : "/articles";

  return (
    <section className={styles.article_main}>
      <Header title={headerTitle} />
      <div>
        <ArticleList data={data} />
      </div>
      <Pagination
        basePath={basePath}
        currentPage={page}
        pageSize={pageSize}
        totalCount={paginationTotal}
      />
    </section>
  );
}
