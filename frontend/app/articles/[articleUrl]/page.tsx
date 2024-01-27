import Image from "next/image";
import getData from "../../../src/helpers/getData";
import { IArticleText } from "../../../src/models/interfaces/articleText";
import DynamicComponent from "../../../src/shared/dynamicComponent/DynamicComponent";
import "./Article.css";

interface IArticleParams {
  params: { articleUrl: string };
}

export default async function Article({ params }: IArticleParams) {
  const { data } = await getData(
    `/api/articles?populate=deep&filters[url][$eq]=${params.articleUrl}`
  );

  return (
    <div>
      <h1>{data[0].attributes.title}</h1>
      <div className="article_image">
        <Image
          width={500}
          height={200}
          alt={data[0].attributes.title}
          src={`${process.env.BACKEND_URL}${data[0].attributes.mainImage.data.attributes.url}`}
        />
      </div>

      <div>
        {data[0].attributes.articleText.map((el: IArticleText) => (
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
