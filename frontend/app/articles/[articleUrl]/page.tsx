import Image from "next/image";
import DynamicComponent from "../../../src/shared/dynamicComponent/DynamicComponent";
import getData from "../../../src/helpers/getData";
import getImageSrc from "../../../src/helpers/getImageSrc";
import "./Article.css";
import { IArticle } from "../../../src/models/interfaces/article";

interface IArticleParams {
  params: { articleUrl: string };
}

export default async function Article({ params }: IArticleParams) {
  const { data }: { data: IArticle[] } = await getData({
    type: "articles",
    searchUrl: params.articleUrl,
  });
  console.log(data[0].attributes.mainImage);

  return (
    <div>
      <div className="article_image">
        <div>
          <Image
            width={500}
            height={200}
            alt={data[0].attributes.title}
            src={getImageSrc(data[0].attributes.mainImage)}
          />
        </div>
        <h1>{data[0].attributes.title}</h1>
      </div>

      <div>
        {data[0].attributes.articleText.map((el) => (
          <DynamicComponent el={el} />
        ))}
      </div>

      <div>
        <a target="_blank" href={data[0].attributes.fbPost}>
          Ֆոտոշարք
        </a>
      </div>
    </div>
  );
}
