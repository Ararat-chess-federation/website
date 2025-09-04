import getData from "../../../src/helpers/getData";
import { IAboutData } from "../../../src/models/interfaces/about";
import { siteTitle } from "../../../src/constants/titles";
import NotFound from "../../not-found";
import { AboutPage } from "../../../src/widgets/AboutPage";

export const metadata = {
  title: `Մեր մասին | ${siteTitle}`,
  description: "Արարատի մարզի շախմատի ֆեդերացիայի պատմություն",
};

export default async function About() {
  const { data }: { data: IAboutData } = await getData({
    type: "about",
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
