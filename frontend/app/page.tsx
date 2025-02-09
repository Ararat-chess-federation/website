import getData from "../src/helpers/getData";
import { ArticleList } from "./articles/page";
import MoreButton from "../src/components/moreButton/MoreButton";
import ShortInfo from "../src/components/shortInfo/ShortInfo";
import { IArticle } from "../src/models/interfaces/article";
import "./Home.css";
import NotFound from "./not-found";
import { siteTitle } from "../src/constants/titles";

export const metadata = {
  title: siteTitle,
  description: siteTitle,
  metadataBase: new URL(`${process.env.PROTOCOL}://${process.env.HOST_NAME}`),
  openGraph: {
    images: "/ogLogo.png",
  },
};

export default async function Home() {
  const { data }: { data: IArticle[] } = await getData({
    type: "articles",
    sort: "publishDate:desc",
    limit: 2,
    populate: {
      mainImage: {
        fields: ["url"],
      },
    },
  });

  return (
    <main>
      <div>
        <div>
          <h2>Վերջին նորություններ</h2>
        </div>
        <section className="articles_container">
          <ArticleList data={data} />
        </section>
        <MoreButton link="/articles" />
      </div>
      {/* <section className="region_info">
        <ShortInfo type="branches" />
        <ShortInfo type="trainers" />
      </section> */}
    </main>
  );
}
