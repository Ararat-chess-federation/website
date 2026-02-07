"use client"

import { useTranslations } from "next-intl";
import styles from "./address.module.scss";

export default function Address({ address }: { address: string }) {
  const t = useTranslations()
  return (
    <p className={styles.address}>
      <span className={styles.address_title}>{t("contactsInfo.address")}</span>
      <span className={styles.main_address}>{address}</span>
    </p>
  );
}
