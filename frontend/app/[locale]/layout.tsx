import "swiper/css";
import {
  Locale,
  NextIntlClientProvider,
  hasLocale,
  useTranslations,
} from "next-intl";
import requestConfig from "../../i18n/request";
import { routing } from "../../i18n/routing";
import Header from "../../src/components/header/Header";
import "../../styles/variables.css";
import "../../styles/global.css";
import "./layout.css";
import { CSPostHogProvider } from "./providers";
import { Footer } from "../../src/components/footer";
import { notFound } from "next/navigation";
import { getMessages, getTranslations, getLocale } from "next-intl/server";
import { messagesMap } from "../../i18n/messages";

export const dynamic = "force-dynamic";

interface ILayout {
  children: React.ReactNode;
  params: { locale: string };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: Omit<LayoutProps<"/[locale]">, "children">
) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "LocaleLayout",
  });

  return {
    title: t("title"),
    description: t("title"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: ILayout) {
  // const { locale } = await params;
  // const lc = await getLocale();
  // const message = await getMessages();
  // console.log("Current locale:", lc);
  // console.log("Current messages:", message);
  // if (!hasLocale(routing.locales, locale)) {
  //   notFound();
  // }

  // let messages;
  // try {
  //   messages = (await import(`../../src/messages/${locale}.json`)).default;
  // } catch (e) {
  //   notFound();
  // }
  // console.log("Loaded messages for locale:", locale, messages);

  // let messages;
  // try {
  //   messages = (await import(`../../src/messages/${locale}.json`)).default;
  // } catch {
  //   // If the locale is not supported, fallback
  //   messages = (await import(`../../src/messages/${routing.defaultLocale}.json`))
  //     .default;
  // }

  const { locale } = params;

  // robust check — if locale invalid, show 404
  if (!Object.keys(messagesMap).includes(locale)) {
    notFound();
  }

  const messages = messagesMap[locale as keyof typeof messagesMap];
  return (
    <html lang={locale}>
      <CSPostHogProvider>
        <body>
          <NextIntlClientProvider
            key={locale}
            locale={locale}
            messages={messages}
          >
            <Header />
            <main className="main_container">
              <section className="content_container">{children}</section>
            </main>
            <Footer />
          </NextIntlClientProvider>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
