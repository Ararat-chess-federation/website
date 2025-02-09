import DynamicComponent from "../../src/shared/dynamicComponent/DynamicComponent";
import getData from "../../src/helpers/getData";
import { IAboutData } from "../../src/models/interfaces/about";
import { siteTitle } from "../../src/constants/titles";
import NotFound from "../not-found";

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
    <main>
      <h1>Ֆեդերացիայի պատմություն</h1>

      {about.map((el, idx: number) => (
        <DynamicComponent key={idx} el={el} idx={idx} />
      ))}
    </main>
  );
}
