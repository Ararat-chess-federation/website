import ContentAccordion from "../../shared/contentAccordion";
import Pagination from "../../components/pagination/Pagination";
import { SECTIONS, TSection } from "../../constants/topics";
import { ITopicItem } from "../../models/interfaces/topic";
import { Header } from "./components/Header";
import { TopicTabs } from "./components/TopicTabs";
import { EmptyTopic } from "./components/EmptyTopic";
import styles from "./topic.module.scss";

interface ITopicPageProps {
  section: TSection;
  slug: string;
  data: ITopicItem[];
  page: number;
  pageSize: number;
  paginationTotal: number;
}

export default function TopicPage({
  section,
  slug,
  data,
  page,
  pageSize,
  paginationTotal,
}: ITopicPageProps) {
  return (
    <main className={styles.topic_page}>
      <Header section={section} />
      <TopicTabs section={section} topics={SECTIONS[section]} activeSlug={slug} />

      {data.length ? (
        <div className={styles.list}>
          {data.map(({ documentId, title, content }) => (
            <ContentAccordion key={documentId} title={title} content={content} />
          ))}
        </div>
      ) : (
        <EmptyTopic />
      )}

      {paginationTotal > pageSize && (
        <Pagination
          basePath={`/${section}/${slug}`}
          currentPage={page}
          pageSize={pageSize}
          totalCount={paginationTotal}
        />
      )}
    </main>
  );
}
