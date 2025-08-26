import Header from "../src/components/header/Header";
import "../styles/variables.css";
import "../styles/global.css";
import "./layout.css";
import { Metadata } from "next";
import { CSPostHogProvider } from "./providers";
import { Footer } from "../src/components/footer";
import 'swiper/css';
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Արարատի մարզի շախմատի ֆեդերացիա",
  description: "Արարատի մարզի շախմատի ֆեդերացիա",
};

interface ILayout {
  children: React.ReactNode;
}

export default function RootLayout({ children }: ILayout) {
  return (
    <html lang="hy">
      <CSPostHogProvider>
        <body>
          <Header />
          <main className="main_container">
            <section className="content_container">{children}</section>
          </main>
          <Footer />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
