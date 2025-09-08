import getData from "../../../src/helpers/getData";
import { IArticle } from "../../../src/models/interfaces/article";
import { siteTitle } from "../../../src/constants/titles";
import NotFound from "../../not-found";
import { IMeta } from "../../../src/models/interfaces/meta";
import ArticlesPage from "../../../src/widgets/ArticlesPage";
import { TLang } from "../../../src/models/interfaces/getData";

export const metadata = {
  title: `Նորություններ | ${siteTitle}`,
  description: "Արարատի մարզի շախմատի ֆեդերացիայի նորություններ",
};

interface ISearchParams {
  searchParams: Promise<{
    page: string;
  }>;
  params: { locale: TLang }
}

export default async function Articles(props: ISearchParams) {
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
