import Link from "next/link";
import { ITrainer } from "../../models/interfaces/trainer";
import styles from "./trainersList.module.scss";

export default function TrainersList({ trainers }: { trainers: ITrainer[] }) {
  return (
    <p className={styles.branches_main}>
      <span className={styles.branches_title}>Մարզիչներ՝ </span>
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
