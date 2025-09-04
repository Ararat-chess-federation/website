import getData from "../../src/helpers/getData";
import { IArticle } from "../../src/models/interfaces/article";
import "./Home.css";
import { siteTitle } from "../../src/constants/titles";
import { HomePage } from "../../src/widgets/HomePage";
import { TLang } from "../../src/models/interfaces/getData";

export const metadata = {
  title: siteTitle,
  description: siteTitle,
  metadataBase: new URL(`${process.env.PROTOCOL}://${process.env.HOST_NAME}`),
  openGraph: {
    images: "/ogLogo.png",
  },
};

export default async function Home({ params }: { params: { locale: TLang } }) {
  const { locale } = await params;
  const { data }: { data: IArticle[] } = await getData({
    type: "articles",
    sort: "publishDate:desc",
    limit: 6,
    locale,
    populate: {
      mainImage: {
        fields: ["url"],
      },
    },
  });

  return (
    <main>
      <HomePage data={data} />
    </main>
  );
}
