import Link from "next/link";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { NAVIGATION } from "../../../constants/navigation";
import "./Navigation.css";

export default function Navigation() {
  return (
    <section className="navigation">
      <nav className="nav">
        <ul>
          {NAVIGATION.map((el) => (
            <li key={el.link} className="nav_li">
              <Link href={el.link}>{el.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <BurgerMenu />
    </section>
  );
}
