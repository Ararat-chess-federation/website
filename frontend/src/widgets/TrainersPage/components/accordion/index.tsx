"use client";
import { useState } from "react";
import styles from "./accordion.module.scss";
import Img from "../../../../shared/img/Img";
import { IImage } from "../../../../models/interfaces/image";
import { IBranch } from "../../../../models/interfaces/branch";
import ChevronIcon from "../../assets/images/Chevron.svg";
import Image from "next/image";
import ModifiedMarkdown from "../../../../hok/modifiedMarkdown";

interface AccordionProfileProps {
  imgSrc: IImage;
  name: string;
  branches: IBranch[];
  phone: string;
  bio: string;
}

export default function TrainerAccordion({
  imgSrc,
  name,
  branches,
  phone,
  bio,
}: AccordionProfileProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.trainer_card}>
      <div className={styles.details_container}>
        <Img
          width={150}
          height={150}
          src={imgSrc}
          alt={name}
          className={styles.trainer_img}
          priority={true}
        />
        <div className={styles.info} onClick={() => setOpen(!open)}>
          <div className={styles.trainer_info}>
            <h2 className={styles.trainer_name}>{name}</h2>
            <p className={styles.sub_text}>
              Մասնաճյուղեր՝{" "}
              {branches.map((el) => (
                <span className={styles.branch_name} key={el.id}>{el.title}</span>
              ))}
            </p>
            <p className={styles.sub_text}>Հեռ.՝ {phone}</p>
          </div>
          <span className={`${styles.arrow} ${open ? styles.open : ""}`}>
            <Image width={32} height={32} src={ChevronIcon} alt="chevron" />
          </span>
        </div>
      </div>

      {open && (
        <div className={styles.accordion_details}>
          <div />
          <div className={styles.biography}>
            <ModifiedMarkdown>{bio}</ModifiedMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}
