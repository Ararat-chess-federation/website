import DynamicComponent from "../../shared/dynamicComponent/DynamicComponent";
import { IArticleText } from "../../models/interfaces/article";
import styles from "./about.module.scss";

export function AboutPage({ data }: { data: IArticleText[] }) {
  return (
    <main className={styles.about_container}>

      <div className={styles.about_details}>
        {data.map((el, idx: number) => (
          <DynamicComponent key={idx} el={el} idx={idx} />
        ))}
      </div>
    </main>
  );
}
