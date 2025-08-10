import TrainersList from "../../shared/trainersList/TrainersList";
import Address from "../../shared/address/Address";
import Img from "../../shared/img/Img";
import TrainingScheduleCard from "../../components/trainingScheduleCard/TrainingScheduleCard";
import styles from "./branches.module.scss";
import { IBranch } from "../../models/interfaces/branch";
import { LinedTitle } from "../../shared/linedTitle";

export default async function BranchesPage({ data }: { data: IBranch[] }) {
  return (
    <section className={styles.branches_main}>
      <LinedTitle title="Մասնաճյուղեր" />
      <div className={styles.branches_container}>
        {data.map(
          ({ url, mainImage, title, address, trainers, description }) => {
            return (
              <div key={url} className={styles.branch_card}>
                <div className={styles.branch_info}>
                  <h2 className={styles.branch_name}>{title}</h2>
                  <Address address={address} />
                  <TrainersList trainers={trainers} />
                </div>

                <div className={styles.branch_details_container}>
                  <Img
                    width={160}
                    height={120}
                    src={mainImage}
                    alt={title}
                    className={styles.branch_img}
                  />
                  <TrainingScheduleCard
                    trainerData={trainers}
                    scheduleData={description}
                  />
                </div>
                <div className={styles.empty_line} />
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}
