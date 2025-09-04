import TrainersList from "../../shared/trainersList/TrainersList";
import Address from "../../shared/address/Address";
import Img from "../../shared/img/Img";
import TrainingScheduleCard from "../../components/trainingScheduleCard/TrainingScheduleCard";
import styles from "./branches.module.scss";
import { IBranch } from "../../models/interfaces/branch";
import { LinedTitle } from "../../shared/linedTitle";
import { getTranslations } from "next-intl/server";

export default async function BranchesPage({ data }: { data: IBranch[] }) {
  const t = await getTranslations();
  return (
    <section className={styles.branches_main}>
      <LinedTitle title={t("branches")} />
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
                  <div className={styles.image_container}>
                    <Img
                      width={160}
                      height={120}
                      src={mainImage}
                      alt={title}
                      className={styles.branch_img}
                    />
                  </div>
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
