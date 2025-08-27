import Link from "next/link";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { NAVIGATION, NAVIGATIONBTN } from "./constants";
import styles from "./nav.module.scss";
import { LinkItem } from "../../../shared/linkItem";

export default function Navigation() {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {NAVIGATION.map((el) => (
            <li key={el.link} className={styles.navLi}>
              <LinkItem link={el.link} title={el.title} />
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.navBtns}>
        <Link href={NAVIGATIONBTN.link} className={styles.branchesLink}>
          <button className={styles.branchesBtn}>
            <span className={styles.text}>{NAVIGATIONBTN.title}</span>
          </button>
        </Link>
        <BurgerMenu />
      </div>
    </>
  );
}
