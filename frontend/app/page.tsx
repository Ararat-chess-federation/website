import getData from "../src/helpers/getData";
import { ArticleList } from "./articles/page";
import MoreButton from "../src/components/moreButton/MoreButton";
import ShortInfo from "../src/components/shortInfo/ShortInfo";
import { IArticle } from "../src/models/interfaces/article";
import "./Home.css";

export default async function Home() {
  const { meta: trainersMeta }: { meta: any } = await getData({
    type: "trainers",
    params: "pagination[limit]=2",
  });
  const { meta: branchesMeta }: { meta: any } = await getData({
    type: "branches",
    params: "pagination[limit]=2",
  });
  const { data: articles }: { data: IArticle[] } = await getData({
    type: "articles",
    params: "sort[0]=publishDate:desc&pagination[limit]=2",
  });

  return (
    <main>
      <div>
        <div>
          <h2>Վերջին նորություններ</h2>
        </div>
        <section className="articles_container">
          <ArticleList data={articles} />
        </section>
        <MoreButton link="/articles" />
      </div>
      <section className="region_info">
        <ShortInfo type="branches" count={branchesMeta.pagination.total} />
        <ShortInfo type="trainers" count={trainersMeta.pagination.total} />
      </section>
    </main>
  );
}
