"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { FULLNAVIGATION } from "../../../constants/navigation";
import BurgerIcon from "./icons/menuIcon.svg";
import styles from "./menu.module.scss";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const t = useTranslations()
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  
  return (
    <div className={styles.burger_container} ref={menuRef}>
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
                {t(el.title)}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
