import { NextIntlClientProvider } from "next-intl";
import NotFound from "../src/components/404/404";
import { messagesMap } from "../i18n/messages";
import generatePageMetadata from "../src/helpers/generatePageMetadata";
import "../styles/variables.css";
import "../styles/global.css";

const DEFAULT_LOCALE = "hy" as const;

export function generateMetadata() {
  return generatePageMetadata({ type: "notFound", locale: DEFAULT_LOCALE });
}

export default function NotFoundPage() {
  return (
    <html lang={DEFAULT_LOCALE}>
      <body>
        <NextIntlClientProvider locale={DEFAULT_LOCALE} messages={messagesMap[DEFAULT_LOCALE]}>
          <main style={{ padding: "60px 0" }}>
            <NotFound />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
