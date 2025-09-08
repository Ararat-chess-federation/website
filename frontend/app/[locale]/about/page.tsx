import getData from "../../../src/helpers/getData";
import { IAboutData } from "../../../src/models/interfaces/about";
import { siteTitle } from "../../../src/constants/titles";
import NotFound from "../../not-found";
import { AboutPage } from "../../../src/widgets/AboutPage";
import { TLang } from "../../../src/models/interfaces/getData";

export const metadata = {
  title: `Մեր մասին | ${siteTitle}`,
  description: "Արարատի մարզի շախմատի ֆեդերացիայի պատմություն",
};
interface IAboutParams {
  params: Promise<{ locale: TLang }>;
}
export default async function About(props: IAboutParams) {
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

  const { about } = data;

  return (
    <AboutPage data={about} />
  );
}
