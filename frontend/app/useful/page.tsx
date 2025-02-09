import getData from "../../src/helpers/getData";
import { siteTitle } from "../../src/constants/titles";
import NotFound from "../not-found";
import { IUsefulData } from "../../src/models/interfaces/useful";
import ModifiedMarkdown from "../../src/hok/modifiedMarkdown";
import "./useful.css";

export const metadata = {
  title: `Օգտակար հղումներ | ${siteTitle}`,
  description: "Օգտակար հղումներ շախմատի մասին",
};

export default async function Useful() {
  const { data }: { data: IUsefulData } = await getData({ type: "useful" });

  if (!data) {
    return <NotFound />;
  }

  const { links } = data;

  return (
    <main>
      <div className="useful_container">
        <h1>Օգտակար հղումներ</h1>
        <ModifiedMarkdown>{links}</ModifiedMarkdown>
      </div>
    </main>
  );
}
