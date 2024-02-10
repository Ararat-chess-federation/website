import Link from "next/link";
import Pagination from "../../src/components/pagination/Pagination";
import DataNotFound from "../../src/shared/dataNotFound/DataNotFound";
import getData from "../../src/helpers/getData";
import { IArticle } from "../../src/models/interfaces/article";
import Img from "../../src/shared/img/Img";
import "./Articles.css";

export const metadata = {
  title: "Նորություններ | Արարատի մարզի շախմատի ֆեդերացիա",
};

interface ISearchParams {
  searchParams: {
    page: string;
  };
}

export default async function Articles({ searchParams }: ISearchParams) {
  const pageSize = 10;
  const page = Number(searchParams.page) || 1;

  const pageStart = (page - 1) * 10;

  const { data, meta }: { data: IArticle[]; meta: any } = await getData({
    type: "articles",
    params: `sort[0]=publishDate:desc&pagination[start]=${pageStart}&pagination[limit]=${pageSize}`,
  });

  if (!data?.length) {
    return <DataNotFound />;
  }

  return (
    <section className="articles_container">
      <ArticleList data={data} />
      <Pagination
        basePath="/articles"
        currentPage={Number(page)}
        pageSize={pageSize}
        totalCount={meta.pagination.total}
      />
    </section>
  );
}

export function ArticleList({ data }: { data: IArticle[] }) {
  return (
    <>
      {data.map(({ attributes }) => {
        const { url, mainImage, title } = attributes;

        return (
          <div key={url} className="article_card">
            <div className="article_photo">
              <Link href={`/articles/${url}`}>
                <Img width={500} height={300} src={mainImage} alt={url} />
              </Link>
            </div>

            <div className="article_info">
              <Link href={`/articles/${url}`}>
                <h2 className="article_name">{title}</h2>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
