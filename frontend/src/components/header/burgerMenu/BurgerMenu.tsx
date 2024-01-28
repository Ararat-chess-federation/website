"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LEFT_MENU, NAVIGATION } from "../../../constants/navigation";
import "./BurgerMenu.css";

export default function BurgerMenu() {
  const [isChecked, setIsChecked] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setIsChecked(false);
  }, [pathName]);

  return (
    <div className="burger_menu">
      <input
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        type="checkbox"
        id="burger_menuAvPaa"
      />
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
