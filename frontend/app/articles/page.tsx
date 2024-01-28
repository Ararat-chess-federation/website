import Link from "next/link";
import DataNotFound from "../../src/shared/dataNotFound/DataNotFound";
import getData from "../../src/helpers/getData";
import { IArticle } from "../../src/models/interfaces/article";
import Img from "../../src/shared/img/Img";
import "./Articles.css";

export default async function Articles() {
  const { data }: { data: IArticle[] } = await getData({ type: "articles" });

  if (!data?.length) {
    return <DataNotFound />;
  }

  return (
    <section className="articles_container">
      {data.map(({ attributes }) => {
        const { url, mainImage, title } = attributes;

        return (
          <div key={url} className="article_card">
            <div className="article_photo">
              <Link href={`/articles/${url}`}>
                <Img width={500} height={300} src={mainImage} alt={url} />
              </Link>
            </div>

            <div className="article_info">
              <Link href={`/articles/${url}`}>
                <h2 className="article_name">{title}</h2>
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}
