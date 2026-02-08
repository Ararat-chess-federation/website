import NotFound from "../../not-found";
import ArticlesPage from "../../../src/widgets/ArticlesPage";
import getData from "../../../src/helpers/getData";
import generatePageMetadata from "../../../src/helpers/generatePageMetadata";
import { IArticle } from "../../../src/models/interfaces/article";
import { IMeta } from "../../../src/models/interfaces/meta";
import { IArticlesProps } from "../../../src/models/interfaces/params";

export async function generateMetadata(props: IArticlesProps) {
  const { locale } = await props.params;

  return generatePageMetadata({ type: "articles", locale })
}

export default async function Articles(props: IArticlesProps) {
  const { locale } = await props.params;
  const searchParams = await props.searchParams;
  const pageSize = 12;
  const page = Number(searchParams.page) || 1;

  const pageStart = (page - 1) * pageSize;

  const { data, meta }: { data: IArticle[]; meta: IMeta } = await getData({
    type: "articles",
    sort: "publishDate:desc",
    locale,
    offset: pageStart,
    limit: pageSize,
    populate: {
      mainImage: {
        fields: ["url"],
      },
    },
  });

  if (!data?.length) {
    return <NotFound />;
  }

  return (
    <ArticlesPage
      data={data}
      page={page}
      pageSize={pageSize}
      paginationTotal={meta.pagination.total}
    />
  );
}
