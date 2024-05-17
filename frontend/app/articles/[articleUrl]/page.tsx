import DynamicComponent from "../../../src/shared/dynamicComponent/DynamicComponent";
import Img from "../../../src/shared/img/Img";
import getData from "../../../src/helpers/getData";
import { IArticle } from "../../../src/models/interfaces/article";
import "./Article.css";
import { siteTitle } from "../../../src/constants/titles";
import NotFound from "../../not-found";
import getImageSrc from "../../../src/helpers/getImageSrc";

interface IArticleParams {
  params: { articleUrl: string };
}

export async function generateMetadata({ params }: IArticleParams) {
  const { data }: { data: IArticle[] } = await getData({
    type: "articles",
    searchUrl: params.articleUrl,
  });

  if (!data?.length) {
    return;
  }

  const { title, mainImage } = data[0].attributes;

  return {
    title: `${title} | ${siteTitle}`,
    description: title,
    openGraph: {
      images: getImageSrc(mainImage),
    },
  };
}

export default async function Article({ params }: IArticleParams) {
  const { data }: { data: IArticle[] } = await getData({
    type: "articles",
    searchUrl: params.articleUrl,
  });

  if (!data?.length) {
    return <NotFound />;
  }

  const { title, mainImage, articleText, fbPost } = data[0].attributes;

  return (
    <div>
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

      <div className="fb_link_container">
        <a target="_blank" className="fb_link" href={fbPost}>
          Ֆոտոշարք
        </a>
      </div>
    </div>
  );
}
