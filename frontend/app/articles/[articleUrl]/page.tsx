import Image from "next/image";
import DynamicComponent from "../../../src/shared/dynamicComponent/DynamicComponent";
import getData from "../../../src/helpers/getData";
import getImageSrc from "../../../src/helpers/getImageSrc";
import { IArticle } from "../../../src/models/interfaces/article";
import "./Article.css";

interface IArticleParams {
  params: { articleUrl: string };
}

export default async function Article({ params }: IArticleParams) {
  const { data }: { data: IArticle[] } = await getData({
    type: "articles",
    searchUrl: params.articleUrl,
  });

  const { title, mainImage, articleText, fbPost } = data[0].attributes;

  return (
    <div>
      <div className="article_header">
        <div className="article_image">
          <Image
            width={500}
            height={200}
            alt={title}
            src={getImageSrc(mainImage)}
          />
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
