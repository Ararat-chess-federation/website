import Image from "next/image";
import Link from "next/link";
import getData from "../../src/helpers/getData";
import getImageSrc from "../../src/helpers/getImageSrc";
import { IArticle } from "../../src/models/interfaces/article";
import Img from "../../src/shared/img/Img";
import "./Articles.css";

export default async function Articles() {
  const { data }: { data: IArticle[] } = await getData({ type: "articles" });

  return (
    <section className="articles_container">
      {data.map((el) => (
        <div key={el.attributes.url} className="article_card">
          <div className="article_photo">
            <Link href={`/articles/${el.attributes.url}`}>
              <Img
                width={500}
                height={300}
                src={el.attributes.mainImage}
                alt={el.attributes.url}
              />
            </Link>
          </div>

          <div className="article_info">
            <Link href={`/articles/${el.attributes.url}`}>
              <h2 className="article_name">{el.attributes.title}</h2>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
