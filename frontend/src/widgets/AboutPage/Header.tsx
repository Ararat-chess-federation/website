"use client";

import React from "react";
import { LinedTitle } from "../../shared/linedTitle";
import styles from "./about.module.scss";
import { useTranslations } from "next-intl";

export const Header = () => {
    const t = useTranslations();
  return (
    <>
      <LinedTitle title={t("about")} />
      <h1 className={styles.title}>{t("federation.federation_history")}</h1>
    </>
  );
};
