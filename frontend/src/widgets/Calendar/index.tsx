import React from "react";
import ModifiedMarkdown from "../../hok/modifiedMarkdown";
import { LinedTitle } from "../../shared/linedTitle";
import styles from "./calendar.module.scss";
import CalendarImage from "./assets/images/calendarImage.png";
import Image from "next/image";

export default function CalendarPage({ calendar }: { calendar: string }) {
  return (
    <section className={styles.calendar_main}>
      <LinedTitle title="Օրացուցային պլան" />
      <Image
        alt="calendar_image"
        src={CalendarImage}
        className={styles.calendar_image}
      />
      <div className={styles.calendar_description}>
        <p>
          *Ժամկետը կախված ՀՇԱ օրացուցային պլանից կարող է փոփոխվել։ Բոլոր
          մրցաշարերի անցկացման մասին նախօրոք կհայտարարվի կայքում և ֆեյսբուքյան
          էջում։
        </p>
        <ModifiedMarkdown>{calendar}</ModifiedMarkdown>
      </div>
    </section>
  );
}
