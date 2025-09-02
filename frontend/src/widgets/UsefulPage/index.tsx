import { useTranslations } from "next-intl";
import ModifiedMarkdown from "../../hok/modifiedMarkdown";
import { LinedTitle } from "../../shared/linedTitle";
import styles from "./useful.module.scss";
import FigureImage from "./assets/images/figures.png";
import Image from "next/image";

export function UsefulPage({ links }: { links: string }) {
  const t = useTranslations();
  return (
    <main className={styles.useful_page}>
      <LinedTitle title={t("useful")} />
      <div className={styles.details_container}>
        <div className={styles.useful_container}>
          <ModifiedMarkdown>{links}</ModifiedMarkdown>
        </div>
        <div className={styles.image_container}>
          <Image src={FigureImage} alt="FigureImage" />
        </div>
      </div>
    </main>
  );
}
