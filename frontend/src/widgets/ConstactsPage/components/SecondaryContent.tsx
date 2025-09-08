"use client";

import { useTranslations } from "next-intl";
import LinkButton from "../../../shared/linkButton";
import styles from "../contacts.module.scss";

export const SecondaryContent = () => {
  const t = useTranslations();
  return (
    <>
      <p>{t("contactsInfo.trainersDescription")}</p>
      <div>
        <LinkButton
          link="/trainers"
          title={t("contactsInfo.trainersList")}
          className={styles.trainers_button}
        />
      </div>
    </>
  );
};
