import { getLocale } from "next-intl/server";
import NotFound from "../../src/components/404/404";
import generatePageMetadata from "../../src/helpers/generatePageMetadata";
import { TLang } from "../../src/models/interfaces/getData";

export async function generateMetadata() {
  const locale = (await getLocale()) as TLang;

  return generatePageMetadata({ type: "notFound", locale });
}

export default function LocaleNotFoundPage() {
  return <NotFound />;
}
