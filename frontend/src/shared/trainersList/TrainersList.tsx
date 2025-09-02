import { useTranslations } from "next-intl";
import Link from "next/link";
import { ITrainer } from "../../models/interfaces/trainer";
import styles from "./trainersList.module.scss";

export default function TrainersList({ trainers }: { trainers: ITrainer[] }) {
  const t = useTranslations();
  return (
    <p className={styles.branches_main}>
      <span className={styles.branches_title}>{t("trainers")}: </span>
      {trainers.map((el, i) => (
        <span key={el.url}>
          <Link href={`/trainers?trainer=${el.url}`} className={styles.trainer_name}>
            {el.fullName}
          </Link>
          {i < trainers.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
  );
}
