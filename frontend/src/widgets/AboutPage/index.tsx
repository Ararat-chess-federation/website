import DynamicComponent from "../../shared/dynamicComponent/DynamicComponent";
import { IArticleText } from "../../models/interfaces/article";
import { LinedTitle } from "../../shared/linedTitle";
import styles from "./about.module.scss";

export function AboutPage({ data }: { data: IArticleText[] }) {
  return (
    <main className={styles.about_container}>
      <LinedTitle title="Մեր մասին" />
      <h1 className={styles.title}>Ֆեդերացիայի պատմություն</h1>

      <div className={styles.about_details}>
        {data.map((el, idx: number) => (
          <DynamicComponent key={idx} el={el} idx={idx} />
        ))}
      </div>
    </main>
  );
}
