"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FULLNAVIGATION } from "../../../constants/navigation";
import BurgerIcon from "./icons/MenuIcon.svg";
import styles from "./menu.module.scss";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.burger_container}>
      <div className={styles.navbar}>
        <button className={styles.burger_btn} onClick={() => setOpen(!open)}>
          <Image alt="menu" src={BurgerIcon} />
        </button>
      </div>

      <div className={`${styles.menu} ${open ? styles.open : ""}`}>
        <ul className={styles.menu_list}>
          {FULLNAVIGATION.map((el) => (
            <Link
              href={el.link}
              key={el.link}
              onClick={() => setOpen(false)}
              className={styles.menu_item}
            >
              <li key={el.link} className={styles.menu_li}>
                {el.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
