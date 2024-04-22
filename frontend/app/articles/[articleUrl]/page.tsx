import DynamicComponent from "../../../src/shared/dynamicComponent/DynamicComponent";
import Img from "../../../src/shared/img/Img";
import DataNotFound from "../../../src/shared/dataNotFound/DataNotFound";
import getData from "../../../src/helpers/getData";
import { IArticle } from "../../../src/models/interfaces/article";
import "./Article.css";
import { siteTitle } from "../../../src/constants/titles";

interface IArticleParams {
  params: { articleUrl: string };
}

export async function generateMetadata({ params }: any) {
  const { data }: { data: IArticle[] } = await getData({
    type: "articles",
    searchUrl: params.articleUrl,
  });

  const { title } = data[0].attributes;

  return {
    title: `${title} | ${siteTitle}`,
    description: title,
  };
}

export default async function Article({ params }: IArticleParams) {
  const { data }: { data: IArticle[] } = await getData({
    type: "articles",
    searchUrl: params.articleUrl,
  });

  if (!data?.length) {
    return <DataNotFound />;
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

      <div>
        <a target="_blank" href={fbPost}>
          Ֆոտոշարք
        </a>
      </div>
    </div>
  );
}
