import NotFound from "../src/components/404/404";
import generatePageMetadata from "../src/helpers/generatePageMetadata";
import { IPageProps } from "../src/models/interfaces/params";

export async function generateMetadata(props: IPageProps) {
  const { locale } = await props.params;

  return generatePageMetadata({ type: "notFound", locale })
}

export default NotFound;
