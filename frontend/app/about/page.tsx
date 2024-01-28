import DynamicComponent from "../../src/shared/dynamicComponent/DynamicComponent";
import getData from "../../src/helpers/getData";
import { IAboutData } from "../../src/models/interfaces/about";

export default async function About() {
  const { data }: { data: IAboutData } = await getData({ type: "about" });
  const { about } = data.attributes;

  return (
    <main>
      <h1>Ֆեդերացիայի պատմություն</h1>

      {about.map((el, idx: number) => (
        <DynamicComponent key={idx} el={el} idx={idx} />
      ))}
    </main>
  );
}
