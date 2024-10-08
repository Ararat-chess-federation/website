import Link from "next/link";
import Pagination from "../../src/components/pagination/Pagination";
import getData from "../../src/helpers/getData";
import { IArticle } from "../../src/models/interfaces/article";
import Img from "../../src/shared/img/Img";
import { siteTitle } from "../../src/constants/titles";
import "./Articles.css";
import NotFound from "../not-found";
import { IMeta } from "../../src/models/interfaces/meta";

export const metadata = {
  title: `Նորություններ | ${siteTitle}`,
  description: "Արարատի մարզի շախմատի ֆեդերացիայի նորություններ",
};

interface ISearchParams {
  searchParams: {
    page: string;
  };
}

export default async function Articles({ searchParams }: ISearchParams) {
  const pageSize = 10;
  const page = Number(searchParams.page) || 1;

  const pageStart = (page - 1) * pageSize;

  const { data, meta }: { data: IArticle[]; meta: IMeta } = await getData({
    type: "articles",
    params: `sort[0]=publishDate:desc&pagination[start]=${pageStart}&pagination[limit]=${pageSize}`,
  });

  if (!data?.length) {
    return <NotFound />;
  }

  return (
    <section>
      <div className="articles_list_container">
        <ArticleList data={data} />
      </div>
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
  if (!data) {
    return null;
  }
  
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
