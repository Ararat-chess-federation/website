import Link from "next/link";
import { IArticle } from "../../models/interfaces/article";
import Img from "../../shared/img/Img";
import "./Article.css"

export function ArticleList({ data }: { data: IArticle[] }) {
  if (!data) {
    return null;
  }

  return (
    <>
      {data.map(({ url, mainImage, title }) => {
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
    </>
  );
}
