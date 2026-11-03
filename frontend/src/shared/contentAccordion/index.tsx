"use client";

import { useId, useState } from "react";
import Image from "next/image";
import ModifiedMarkdown from "../../hok/modifiedMarkdown";
import ChevronIcon from "./Chevron.svg";
import styles from "./contentAccordion.module.scss";

interface IContentAccordionProps {
  title: string;
  content: string;
  defaultOpen?: boolean;
}

export default function ContentAccordion({
  title,
  content,
  defaultOpen = false,
}: IContentAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <div className={styles.accordion}>
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
