import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import getData from "../../helpers/getData";
import generatePageMetadata from "../../helpers/generatePageMetadata";
import { redirect } from "../../../i18n/navigation";
import { findTopic, SECTIONS, TSection } from "../../constants/topics";
import { siteTitle } from "../../constants/titles";
import { TLang } from "../../models/interfaces/getData";
import TopicPage from ".";

const PAGE_SIZE = 20;

export interface ITopicRouteProps {
  params: Promise<{ locale: TLang; topic: string }>;
  searchParams: Promise<{ page?: string }>;
}

export interface ISectionRouteProps {
  params: Promise<{ locale: TLang }>;
}

export async function redirectToFirstTopic(
  section: TSection,
  props: ISectionRouteProps
) {
  const { locale } = await props.params;

  redirect({
    href: `/${section}/${SECTIONS[section][0].slug}` as "/",
    locale,
  });
}

export async function generateTopicMetadata(
  section: TSection,
  props: ITopicRouteProps
) {
  const { locale, topic: slug } = await props.params;
  const metadata = generatePageMetadata({ type: section, locale });
  const topic = findTopic(section, slug);

  if (!topic) {
    return metadata;
  }

  const t = await getTranslations({ locale, namespace: "topics" });

  return { ...metadata, title: `${t(slug)} | ${siteTitle[locale]}` };
}

export async function renderTopicPage(
  section: TSection,
  props: ITopicRouteProps
) {
  const { locale, topic: slug } = await props.params;
  const { page: pageParam } = await props.searchParams;
  const topic = findTopic(section, slug);

  if (!topic) {
    return notFound();
  }

  const page = Math.max(Number(pageParam) || 1, 1);

  const { data, meta } = await getData({
    type: topic.type,
    locale,
    sort: "createdAt:asc",
    fields: ["documentId", "title", "content"],
    offset: (page - 1) * PAGE_SIZE,
    limit: PAGE_SIZE,
  });

  return (
    <TopicPage
      section={section}
      slug={slug}
      display={topic.display}
      data={data ?? []}
      page={page}
      pageSize={PAGE_SIZE}
      paginationTotal={meta?.pagination?.total ?? 0}
    />
  );
}
