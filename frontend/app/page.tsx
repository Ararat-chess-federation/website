import getData from "../src/helpers/getData";
import { IArticle } from "../src/models/interfaces/article";
import "./Home.css";
import { siteTitle } from "../src/constants/titles";
import { HomePage } from "../src/widgets/home";

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
    limit: 3,
    populate: {
      mainImage: {
        fields: ["url"],
      },
    },
  });

  return (
    <main>
      <HomePage data={data} />
      {/* <section className="articles_container">
          <ArticleList data={data} />
        </section>
        <MoreButton link="/articles" />
      </div>
      <section className="region_info">
        <ShortInfo type="branches" />
        <ShortInfo type="trainers" />
      </section> */}
    </main>
  );
}
