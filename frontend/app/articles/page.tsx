import Image from "next/image";
import Link from "next/link";
import getData from "../../src/helpers/getData";
import getImageSrc from "../../src/helpers/getImageSrc";
import "./Articles.css";

export default async function Articles() {
  const { data } = await getData("/api/articles?populate=deep");

  return (
    <section className="articles_container">
      {data.map((el: any) => (
        <div key={el.attributes.url} className="article_card">
          <div className="article_photo">
            <Link href={`/articles/${el.attributes.url}`}>
              <Image
                width={150}
                height={50}
                src={getImageSrc(el.attributes.mainImage)}
                alt={el.attributes.url}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  maxHeight: "300px",
                }}
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
