"use client";

import { useTranslations } from "next-intl";
import { LinedTitle } from "../../../shared/linedTitle";
import styles from "../contacts.module.scss";

export const Header = () => {
  const t = useTranslations();
  return (
    <>
      <LinedTitle title={t("ratings")} />
      <h1 className={styles.title}>{t("contactsInfo.contactInformation")}</h1>
    </>
  );
};
