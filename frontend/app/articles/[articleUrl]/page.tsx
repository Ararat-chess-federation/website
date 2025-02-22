import DynamicComponent from "../../../src/shared/dynamicComponent/DynamicComponent";
import Img from "../../../src/shared/img/Img";
import getData from "../../../src/helpers/getData";
import { IArticle } from "../../../src/models/interfaces/article";
import "./Article.css";
import { siteTitle } from "../../../src/constants/titles";
import NotFound from "../../not-found";
import getImageSrc from "../../../src/helpers/getMediaSrc";

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

  const { title, mainImage, articleText, fbPost } = data[0];

  return (
    <div className="article_container">
      <div className="article_header">
        <div className="article_image">
          <Img width={500} height={200} src={mainImage} alt={title} />
        </div>
        <h1 className="article_title">{title}</h1>
      </div>

      <div>
        {articleText.map((el) => (
          <DynamicComponent el={el} />
        ))}
      </div>

      {fbPost && (
        <div className="fb_link_container">
          <a target="_blank" className="fb_link" href={fbPost}>
            Ֆոտոշարք
          </a>
        </div>
      )}
    </div>
  );
}
