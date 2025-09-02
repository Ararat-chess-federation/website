import { useTranslations } from "next-intl";

import DynamicComponent from "../../shared/dynamicComponent/DynamicComponent";
import { IArticleText } from "../../models/interfaces/article";
import { LinedTitle } from "../../shared/linedTitle";
import styles from "./about.module.scss";

export function AboutPage({ data }: { data: IArticleText[] }) {
  const t = useTranslations();
  return (
    <main className={styles.about_container}>
      <LinedTitle title={t("about")} />
      <h1 className={styles.title}>{t('federation.federation_history')}</h1>

      <div className={styles.about_details}>
        {data.map((el, idx: number) => (
          <DynamicComponent key={idx} el={el} idx={idx} />
        ))}
      </div>
    </main>
  );
}
