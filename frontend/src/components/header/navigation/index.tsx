import BurgerMenu from "../burgerMenu/BurgerMenu";
import { NAVIGATION, NAVIGATIONBTN } from "./constants";
import styles from "./nav.module.scss";
import { LinkItem } from "../../../shared/linkItem";
import NavigationLink from "../../NavigationLink";
import { getTranslations } from "next-intl/server";

export default async function Navigation() {
  const t = await getTranslations();
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {NAVIGATION.map((el) => (
            <li key={el.link} className={styles.navLi}>
              <LinkItem link={el.link} title={t(el.title)} />
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.navBtns}>
        <NavigationLink href={NAVIGATIONBTN.link as '/'} className={styles.branchesLink}>
          <button className={styles.branchesBtn}>
            <span className={styles.text}>{t(NAVIGATIONBTN.title)}</span>
          </button>
        </NavigationLink>
        <BurgerMenu />
      </div>
    </>
  );
}
