import React from "react";
import styles from "./trainingScheduleCard.module.scss";
import { IArticleText } from "../../models/interfaces/article";
import { ITrainer } from "../../models/interfaces/trainer";
import ModifiedMarkdown from "../../hok/modifiedMarkdown";

interface TrainingScheduleCardProps {
  trainerData: ITrainer[];
  scheduleData: IArticleText[];
}

export default function TrainingScheduleCard({
  trainerData,
  scheduleData,
}: TrainingScheduleCardProps) {
  const trainingData = trainerData.map((trainer, index) => ({
    trainerName: trainer.fullName,
    scheduleTexts: scheduleData[index].paragraph,
  }));
  return (
    <div className={styles.training_card}>
      <h3 className={styles.training_title}>Պարապմունքի օրեր</h3>
      {trainingData.map((el) => (
        <div key={el.trainerName} className={styles.trainer_schedule}>
          <p className={styles.trainer_name}>{el.trainerName}</p>
          <div className={styles.schedule_container}>
            <ModifiedMarkdown>{el.scheduleTexts}</ModifiedMarkdown>
          </div>
        </div>
      ))}
      {/* <div className={styles.scroll_fade} /> */}
    </div>
  );
}
