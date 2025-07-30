import Header from "../src/components/header/Header";
import LeftMenu from "../src/components/leftMenu/LeftMenu";
import Links from "../src/components/Links/Links";
import "../styles/variables.css";
import "../styles/global.css";
import "./layout.css";
import { Metadata } from "next";
import { CSPostHogProvider } from "./providers";

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
        </body>
      </CSPostHogProvider>
    </html>
  );
}
