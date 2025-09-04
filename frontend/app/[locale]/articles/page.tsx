import getData from "../../../src/helpers/getData";
import { IArticle } from "../../../src/models/interfaces/article";
import { siteTitle } from "../../../src/constants/titles";
import NotFound from "../../not-found";
import { IMeta } from "../../../src/models/interfaces/meta";
import ArticlesPage from "../../../src/widgets/ArticlesPage";

export const metadata = {
  title: `Նորություններ | ${siteTitle}`,
  description: "Արարատի մարզի շախմատի ֆեդերացիայի նորություններ",
};

interface ISearchParams {
  searchParams: Promise<{
    page: string;
  }>;
}

export default async function Articles(props: ISearchParams) {
  const searchParams = await props.searchParams;
  const pageSize = 12;
  const page = Number(searchParams.page) || 1;

  const pageStart = (page - 1) * pageSize;

  const { data, meta }: { data: IArticle[]; meta: IMeta } = await getData({
    type: "articles",
    sort: "publishDate:desc",
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
