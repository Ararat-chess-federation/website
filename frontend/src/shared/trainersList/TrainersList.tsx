"use client";

import { useTranslations } from "next-intl";
import { ITrainer } from "../../models/interfaces/trainer";
import styles from "./trainersList.module.scss";
import NavigationLink from "../../components/NavigationLink";

export default function TrainersList({ trainers }: { trainers: ITrainer[] }) {
  const t = useTranslations();
  return (
    <p className={styles.branches_main}>
      <span className={styles.branches_title}>{t("trainers")}: </span>
      {trainers.map((el, i) => (
        <span key={el.url}>
          <NavigationLink href={`/trainers?trainer=${el.url}` as '/'} className={styles.trainer_name}>
            {el.fullName}
          </NavigationLink>
          {i < trainers.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
  );
}
