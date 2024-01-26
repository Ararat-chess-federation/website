import Image from "next/image";
import Markdown from "react-markdown";
import getData from "../../../src/helpers/getData";
import "./Article.css";

export default async function Article({ params }: any) {
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
          src={`http://localhost:1337${data[0].attributes.mainImage.data.attributes.url}`}
        />
      </div>

      <div>
        {data[0].attributes.articleText.map((el: any) => {
          if (el.__component === "text.paragraph") {
            return <Markdown key={el.paragraph}>{el.paragraph}</Markdown>;
          }
        })}
      </div>

      <div>
        <a target="_blank" href={data[0].attributes.fbPost}>
          Ֆոտոշարք
        </a>
      </div>
    </div>
  );
}
