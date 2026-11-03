import ModifiedMarkdown from "../../hok/modifiedMarkdown";
import styles from "./contentBox.module.scss";

interface IContentBoxProps {
  title: string;
  content: string;
}

export default function ContentBox({ title, content }: IContentBoxProps) {
  return (
    <article className={styles.box}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        <ModifiedMarkdown>{content}</ModifiedMarkdown>
      </div>
    </article>
  );
}
