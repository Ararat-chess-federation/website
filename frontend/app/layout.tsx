import { Metadata } from "next";
import "swiper/css";
import { NextIntlClientProvider } from "next-intl";
import requestConfig from "../src/i18n/request";
import Header from "../src/components/header/Header";
import "../styles/variables.css";
import "../styles/global.css";
import "./layout.css";
import { CSPostHogProvider } from "./providers";
import { Footer } from "../src/components/footer";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Արարատի մարզի շախմատի ֆեդերացիա",
  description: "Արարատի մարզի շախմատի ֆեդերացիա",
};

interface ILayout {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({ children, params }: ILayout) {
  const config = await requestConfig({ locale: params.locale });
  console.log('params', params)
  return (
    <html lang={config.locale}>
      <CSPostHogProvider>
        <body>
          <NextIntlClientProvider
            locale={config.locale}
            messages={config.messages}
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
