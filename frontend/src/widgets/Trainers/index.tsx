import React from "react";
import Img from "../../shared/img/Img";
import { ITrainer } from "../../models/interfaces/trainer";
import styles from "./trainers.module.scss";
import { LinedTitle } from "../../shared/linedTitle";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TrainerAccordion from "./components/accordion";

export default function TrainersPage({ data }: { data: ITrainer[] }) {
  console.log("data", data);
  return (
    <section className={styles.trainers_main}>
      <LinedTitle title="Մարզիչներ" />
      {data.map(
        ({ fullName, profilePhoto, branches, phoneNumber, id, bio }) => {
          return (
            <TrainerAccordion
              key={id}
              branches={branches}
              imgSrc={profilePhoto}
              name={fullName}
              phone={phoneNumber}
              bio={bio}
            />
          );
        }
      )}
    </section>
  );
}
