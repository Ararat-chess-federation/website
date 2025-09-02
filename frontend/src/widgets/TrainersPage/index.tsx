import { useTranslations } from "next-intl";
import React from "react";
import { ITrainer } from "../../models/interfaces/trainer";
import styles from "./trainers.module.scss";
import { LinedTitle } from "../../shared/linedTitle";
import TrainerAccordion from "./components/accordion";

export default function TrainersPage({ data }: { data: ITrainer[] }) {
  const t = useTranslations();
  return (
    <section className={styles.trainers_main}>
      <LinedTitle title={t("trainers")} />
      {data.map(
        ({ fullName, profilePhoto, branches, phoneNumber, id, bio, url }) => {
          return (
            <TrainerAccordion
              key={id}
              branches={branches}
              imgSrc={profilePhoto}
              name={fullName}
              phone={phoneNumber}
              bio={bio}
              url={url}
            />
          );
        }
      )}
    </section>
  );
}
