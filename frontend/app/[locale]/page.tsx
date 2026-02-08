import { HomePage } from "../../src/widgets/HomePage";
import getData from "../../src/helpers/getData";
import { IArticle } from "../../src/models/interfaces/article";
import { siteTitle } from "../../src/constants/titles";
import { IPageProps } from "../../src/models/interfaces/params";
import "./Home.css";



export async function generateMetadata(props: IPageProps) {
  const { locale } = await props.params;

  return {
    title: siteTitle[locale],
    description: siteTitle[locale],
    metadataBase: new URL(`${process.env.PROTOCOL}://${process.env.HOST_NAME}/${locale}`),
    openGraph: {
      images: "/ogLogo.png",
    },
  };
}

export default async function Home(props: IPageProps) {
  const { locale } = await props.params;
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
