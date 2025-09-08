"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import styles from "./accordion.module.scss";
import Img from "../../../../shared/img/Img";
import { IImage } from "../../../../models/interfaces/image";
import { IBranch } from "../../../../models/interfaces/branch";
import ChevronIcon from "../../assets/images/Chevron.svg";
import Image from "next/image";
import ModifiedMarkdown from "../../../../hok/modifiedMarkdown";
import { useSearchParams } from "next/navigation";

interface AccordionProfileProps {
  imgSrc: IImage;
  name: string;
  branches: IBranch[];
  phone: string;
  bio: string;
  url: string;
}

export default function TrainerAccordion({
  imgSrc,
  name,
  branches,
  phone,
  bio,
  url,
}: AccordionProfileProps) {
  const [open, setOpen] = useState(false);
  const accordionRef = useRef<HTMLDivElement | null>(null);
  const params = useSearchParams();
  const trainerName = params.get("trainer");
  const t = useTranslations();

  useEffect(() => {
    if (trainerName === url) {
      setOpen(true);

      setTimeout(() => {
        if (accordionRef.current) {
          const top =
            accordionRef.current.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: top - 150,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [url]);

  return (
    <div className={styles.trainer_card} ref={accordionRef}>
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
              {t("branches")}:{" "}
              {branches.map((el) => (
                <span className={styles.branch_name} key={el.id}>
                  {el.title}
                </span>
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
          <div className={styles.free_block} />
          <div className={styles.biography}>
            <div className={styles.img_container}>
              <Img
                width={250}
                height={250}
                src={imgSrc}
                alt={name}
                className={styles.trainer_sub_img}
                priority={true}
              />
            </div>
            <ModifiedMarkdown>{bio}</ModifiedMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}
