"use client";

import { useTranslations } from "next-intl";
import { Link } from "../../../../i18n/navigation";
import { ITopic, TSection } from "../../../constants/topics";
import styles from "../topic.module.scss";

interface ITopicTabsProps {
  section: TSection;
  topics: ITopic[];
  activeSlug: string;
}

export function TopicTabs({ section, topics, activeSlug }: ITopicTabsProps) {
  const t = useTranslations("topics");

  return (
    <nav className={styles.tabs}>
      {topics.map(({ slug }) => {
        const isActive = slug === activeSlug;

        return (
          <Link
            key={slug}
            href={`/${section}/${slug}` as "/"}
            aria-current={isActive ? "page" : undefined}
            className={`${styles.tab} ${isActive ? styles.active : ""}`}
          >
            {t(slug)}
          </Link>
        );
      })}
    </nav>
  );
}
