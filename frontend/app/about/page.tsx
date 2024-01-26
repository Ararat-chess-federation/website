import getData from "../../src/helpers/getData";
import DynamicComponent from "../../src/shared/dynamicComponent/DynamicComponent";

export default async function About() {
  const { data } = await getData("/api/about?populate=deep");
  const { about } = data.attributes;

  return (
    <main>
      <h1>Ֆեդերացիայի պատմություն</h1>

      {about.map((el: any, idx: number) => (
        <DynamicComponent key={idx} el={el} idx={idx} />
      ))}
    </main>
  );
}
