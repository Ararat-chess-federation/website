
import getData from "../../../src/helpers/getData";
import { IArticle } from "../../../src/models/interfaces/article";
import { siteTitle } from "../../../src/constants/titles";
import NotFound from "../../not-found";
import getImageSrc from "../../../src/helpers/getMediaSrc";
import ArticlePage from "../../../src/widgets/ArticlePage";

interface IArticleParams {
  params: Promise<{ articleUrl: string }>;
}

export async function generateMetadata(props: IArticleParams) {
  const params = await props.params;
  const { data }: { data: IArticle[] } = await getData({
    type: "articles",
    filters: {
      url: params.articleUrl,
    },
  });

  if (!data?.length) {
    return;
  }

  const { title, mainImage } = data[0];

  return {
    title: `${title} | ${siteTitle}`,
    description: title,
    openGraph: {
      images: getImageSrc(mainImage),
    },
  };
}

export default async function Article(props: IArticleParams) {
  const params = await props.params;
  const { data }: { data: IArticle[] } = await getData({
    type: "articles",
    filters: {
      url: params.articleUrl,
    },
    populate: {
      mainImage: {
        fields: ["url"],
      },
      articleText: {
        populate: "*",
      },
    },
  });

  if (!data?.length) {
    return <NotFound />;
  }

  const { title, mainImage, articleText, fbPost, publishedAt } = data[0];

  return (
    <ArticlePage
      title={title}
      articleText={articleText}
      fbPost={fbPost}
      mainImage={mainImage}
      publishedAt={publishedAt}
    />
  );
}
