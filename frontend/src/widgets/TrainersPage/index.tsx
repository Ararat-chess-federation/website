
import { ITrainer } from "../../models/interfaces/trainer";
import styles from "./trainers.module.scss";
import TrainerAccordion from "./components/accordion";
import { Header } from "./components/Header";

export default function TrainersPage({ data }: { data: ITrainer[] }) {
  return (
    <section className={styles.trainers_main}>
      <Header />
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
