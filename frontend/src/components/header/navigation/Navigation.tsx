import Link from "next/link";
import { NAVIGATION, LEFT_MENU } from "../../../constants/navigation";
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

function BurgerMenu() {
  return (
    <div className="burger_menu">
      <input type="checkbox" id="burger_menuAvPaa" />
      <label id="burger" htmlFor="burger_menuAvPaa">
        <div></div>
        <div></div>
        <div></div>
      </label>
      <nav id="burger_menu">
        <ul>
          {NAVIGATION.concat(LEFT_MENU).map((el) => (
            <li key={el.link} className="nav_li">
              <Link href={el.link}>{el.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
