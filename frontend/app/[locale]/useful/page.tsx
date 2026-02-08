import { UsefulPage } from "../../../src/widgets/UsefulPage";
import NotFound from "../../not-found";
import getData from "../../../src/helpers/getData";
import { IUsefulData } from "../../../src/models/interfaces/useful";
import { IPageProps } from "../../../src/models/interfaces/params";
import generatePageMetadata from "../../../src/helpers/generatePageMetadata";

export async function generateMetadata(props: IPageProps) {
  const { locale } = await props.params;

  return generatePageMetadata({ type: "useful", locale })
}

export default async function Useful(props: IPageProps) {
  const { locale } = await props.params;
  const { data }: { data: IUsefulData } = await getData({ type: "useful", locale });

  if (!data) {
    return <NotFound />;
  }

  const { links } = data;

  return <UsefulPage links={links} />;
}
