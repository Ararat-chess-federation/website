import getData from "../../../src/helpers/getData";
import { siteTitle } from "../../../src/constants/titles";
import NotFound from "../../not-found";
import { IUsefulData } from "../../../src/models/interfaces/useful";
import { UsefulPage } from "../../../src/widgets/UsefulPage";
import { TLang } from "../../../src/models/interfaces/getData";

export const metadata = {
  title: `Օգտակար հղումներ | ${siteTitle}`,
  description: "Օգտակար հղումներ շախմատի մասին",
};

interface IUsefulProps {
  params: Promise<{ locale: TLang }>;
}

export default async function Useful(props: IUsefulProps) {
  const { locale } = await props.params;
  const { data }: { data: IUsefulData } = await getData({ type: "useful", locale });

  if (!data) {
    return <NotFound />;
  }

  const { links } = data;

  return <UsefulPage links={links} />;
}
