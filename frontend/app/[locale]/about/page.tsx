import { AboutPage } from "../../../src/widgets/AboutPage";
import NotFound from "../../not-found";
import getData from "../../../src/helpers/getData";
import generateMetadataByLocale from "../../../src/helpers/generatePageMetadata";
import { IAboutData } from "../../../src/models/interfaces/about";
import { IPageProps } from "../../../src/models/interfaces/params";

export async function generateMetadata(props: IPageProps) {
  const { locale } = await props.params;

  return generateMetadataByLocale({ type: "about", locale });
}

export default async function About(props: IPageProps) {
  const { locale } = await props.params;
  const { data }: { data: IAboutData } = await getData({
    type: "about",
    locale,
    populate: {
      about: {
        populate: "*",
      },
    },
  });

  if (!data) {
    return <NotFound />;
  }

  return (
    <AboutPage data={data.about} />
  );
}
