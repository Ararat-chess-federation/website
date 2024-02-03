import Header from "../src/components/header/Header";
import LeftMenu from "../src/components/leftMenu/LeftMenu";
import Links from "../src/components/Links/Links";
import "../styles/variables.css";
import "../styles/global.css";
import "./layout.css";

export const metadata = {
  title: "Արարատի մարզի շախմատի ֆեդերացիա",
};

interface ILayout {
  children: React.ReactNode;
}

export default function RootLayout({ children }: ILayout) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main_container">
          <section className="left_menu_container">
            <LeftMenu />
          </section>
          <section className="content_container">{children}</section>
          <section className="links_container">
            <Links />
          </section>
        </main>
      </body>
    </html>
  );
}
