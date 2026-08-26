import NotFound from "../src/components/404/404";
import generatePageMetadata from "../src/helpers/generatePageMetadata";
import { IPageProps } from "../src/models/interfaces/params";

const DEFAULT_LOCALE = "hy" as const;

export async function generateMetadata(props: IPageProps) {
  const params = await props.params;
  const locale = params?.locale ?? DEFAULT_LOCALE;

  return generatePageMetadata({ type: "notFound", locale });
}

export default function NotFoundPage() {
  return <NotFound />
}
