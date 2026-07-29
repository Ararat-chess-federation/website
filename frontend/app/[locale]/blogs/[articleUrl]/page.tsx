
import getData from "../../../../src/helpers/getData";
import { IArticle } from "../../../../src/models/interfaces/article";
import { siteTitle } from "../../../../src/constants/titles";
import NotFound from "../../../not-found";
import getImageSrc from "../../../../src/helpers/getMediaSrc";
import ArticlePage from "../../../../src/widgets/ArticlePage";
import { IArticleProps } from "../../../../src/models/interfaces/params";

export async function generateMetadata(props: IArticleProps) {
  const { locale, articleUrl } = await props.params;
  const { data }: { data: IArticle[] } = await getData({
    type: "blogs",
    locale,
    filters: {
      url: articleUrl,
    },
  });

  if (!data?.length) {
    return;
  }

  const { title, mainImage } = data[0];

  return {
    title: `${title} | ${siteTitle[locale]}`,
    description: title,
    openGraph: {
      images: getImageSrc(mainImage),
    },
  };
}

export default async function Blog(props: IArticleProps) {
  const params = await props.params;
  const { data }: { data: IArticle[] } = await getData({
    type: "blogs",
    filters: {
      url: params.articleUrl,
    },
    limit: 1,
    populate: {
      mainImage: {
        fields: ["url"],
      },
      articleText: {
        populate: "*",
      },
      // createdBy: {
      //   fields: ["firstname", "lastname"]
      // }
    },
    locale: params.locale
  });

  if (!data?.length) {
    return <NotFound />;
  }

  const { title, mainImage, articleText, fbPost, publishedAt, locale, createdBy } = data[0];

  return (
    <ArticlePage
      title={title}
      articleText={articleText}
      fbPost={fbPost}
      mainImage={mainImage}
      publishedAt={publishedAt}
      locale={locale}
      createdBy={createdBy}
    />
  );
}
