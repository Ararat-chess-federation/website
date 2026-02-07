"use client"

import React from "react";
import ModifiedMarkdown from "../../hok/modifiedMarkdown";
import { LinedTitle } from "../../shared/linedTitle";
import styles from "./calendar.module.scss";
import CalendarImage from "./assets/images/calendarImage.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function CalendarPage({ calendar }: { calendar: string }) {
  const t = useTranslations()
  return (
    <section className={styles.calendar_main}>
      <LinedTitle title={t("calendar")} />
      <Image
        alt="calendar_image"
        src={CalendarImage}
        className={styles.calendar_image}
      />
      <div className={styles.calendar_description}>
        <p>
          *{t("calendarInfo.intro")}
        </p>
        <ModifiedMarkdown>{calendar}</ModifiedMarkdown>
      </div>
    </section>
  );
}
