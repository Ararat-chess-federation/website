import NotFound from "../src/components/404/404";
import { NextIntlClientProvider } from "next-intl";
import { messagesMap } from "../i18n/messages";
import generatePageMetadata from "../src/helpers/generatePageMetadata";

const DEFAULT_LOCALE = "hy" as const;

export function generateMetadata() {
  return generatePageMetadata({ type: "notFound", locale: DEFAULT_LOCALE });
}

export default function NotFoundPage() {
  return (
    <NextIntlClientProvider locale={DEFAULT_LOCALE} messages={messagesMap[DEFAULT_LOCALE]}>
      <NotFound />
    </NextIntlClientProvider>
  );
}
