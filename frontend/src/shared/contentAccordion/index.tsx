"use client";

import { useId, useState } from "react";
import Image from "next/image";
import ModifiedMarkdown from "../../hok/modifiedMarkdown";
import Img from "../img/Img";
import { IImage } from "../../models/interfaces/image";
import ChevronIcon from "./Chevron.svg";
import styles from "./contentAccordion.module.scss";

interface IContentAccordionProps {
  title: string;
  content: string;
  image?: IImage | null;
  defaultOpen?: boolean;
}

export default function ContentAccordion({
  title,
  content,
  image,
  defaultOpen = false,
}: IContentAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <div className={`${styles.accordion} ${image ? styles.with_image : ""}`}>
      {image && (
        <Img
          width={120}
          height={120}
          src={image}
          alt={title}
          className={styles.image}
        />
      )}
      <button
        type="button"
        className={styles.header}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={contentId}
      >
        <h3 className={styles.title}>{title}</h3>
        <span className={`${styles.arrow} ${open ? styles.open : ""}`}>
          <Image width={32} height={32} src={ChevronIcon} alt="" />
        </span>
      </button>

      {open && (
        <div id={contentId} className={styles.content}>
          <ModifiedMarkdown>{content}</ModifiedMarkdown>
        </div>
      )}
    </div>
  );
}
