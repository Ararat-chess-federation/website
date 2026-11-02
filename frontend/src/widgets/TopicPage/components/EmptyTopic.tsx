"use client";

import { useTranslations } from "next-intl";
import styles from "../topic.module.scss";

export const EmptyTopic = () => {
  const t = useTranslations();
  return <p className={styles.empty}>{t("topicsEmpty")}</p>;
};
