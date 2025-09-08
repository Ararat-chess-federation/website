"use client";

import { useTranslations } from "next-intl";
import React from "react";
import styles from "./footer.module.scss";
import Logo from "../../shared/logo/Logo";
import { FOOTER_MENU } from "../../constants/navigation";
import { RegionInfo, PartnersInfo } from "./constants";
import AM from "./images/AM.svg";
import RU from "./images/RU.svg";
import EN from "./images/EN.svg";
import { LinkItem } from "../../shared/linkItem";
import Image from "next/image";
import FiguresImage from "./images/figures.svg";
import Link from "next/link";
import { usePathname, useRouter } from "../../../i18n/navigation";

export const Footer = () => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname() as '/';

  const switchLanguage = (locale: string) => {
    router.push(pathname, { locale });
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.main_footer}>
        <div className={styles.container}>
          <Logo className={styles.logo} />
          <div className={styles.menu_block}>
            {FOOTER_MENU.map((el) => (
              <LinkItem key={el.link} link={el.link} title={t(el.title)} />
            ))}
            {/* <div className={styles.language_block}>
              <button className={styles.lang_button} onClick={() => switchLanguage("hy")}>
                <Image src={AM} alt="AM" />
              </button>
              <button className={styles.lang_button} onClick={() => switchLanguage("ru")}>
                <Image src={RU} alt="RU" />
              </button>
              <button className={styles.lang_button} onClick={() => switchLanguage("en")}>
                <Image src={EN} alt="EN" />
              </button>
            </div> */}
          </div>
        </div>
        <div className={styles.contacts_container}>
          <h3 className={styles.title}>{t(RegionInfo.title)}</h3>
          {RegionInfo.data.map((el) => (
            <React.Fragment key={el.title}>
              <p className={styles.info_title}>{t(el.title)}</p>
              <a href={`tel:${el.phone}`}>
                <p className={styles.info_phone}>{el.phone}</p>
              </a>
            </React.Fragment>
          ))}
        </div>
        <div className={styles.partners_container}>
          {PartnersInfo.map((el) => (
            <Link key={el.link} href={el.link} target="_blank">
              <button className={styles.partners_btn}>
                <Image alt="logo" src={el.img} />
              </button>
            </Link>
          ))}
        </div>
        <Image src={FiguresImage} alt="figures" className={styles.figures} />
      </div>
    </footer>
  );
};
