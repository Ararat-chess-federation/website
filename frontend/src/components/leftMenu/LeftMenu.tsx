import Link from "next/link";
import { LEFT_MENU } from "./constants";
import "./LeftMenu.css";

export default function LeftMenu() {
  return (
    <div className="left_menu_wrapper">
      <ul>
        {LEFT_MENU.map((el) => (
          <li key={el.link} className="left_menu_li">
            <Link href={el.link}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
