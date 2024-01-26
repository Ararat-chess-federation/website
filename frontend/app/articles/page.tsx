import getData from "../../src/helpers/getData";

export default async function Articles() {
  const { data } = await getData("/api/articles?populate=deep");
  console.log(data);

  return <h1>Articles</h1>;
}
