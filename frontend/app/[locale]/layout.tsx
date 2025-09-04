import { Metadata } from "next";
import "swiper/css";
import { Locale, NextIntlClientProvider, hasLocale } from "next-intl";
import requestConfig from "../../src/i18n/request";
import { routing } from "../../src/i18n/routing";
import Header from "../../src/components/header/Header";
import "../../styles/variables.css";
import "../../styles/global.css";
import "./layout.css";
import { CSPostHogProvider } from "./providers";
import { Footer } from "../../src/components/footer";
import { notFound } from "next/navigation";
import {
  getMessages,
  GetRequestConfigParams,
  getTranslations,
} from "next-intl/server";

export const dynamic = "force-dynamic";

// export const metadata: Metadata = {
//   title: "Արարատի մարզի շախմատի ֆեդերացիա",
//   description: "Արարատի մարզի շախմատի ֆեդերացիա",
// };

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
  };
}

export default async function RootLayout({ children, params }: ILayout) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  const config = await requestConfig({
    locale: locale,
  } as GetRequestConfigParams);
  return (
    <html lang={config.locale}>
      <CSPostHogProvider>
        <body>
          <NextIntlClientProvider locale={config.locale} messages={messages}>
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
