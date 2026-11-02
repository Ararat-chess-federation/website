import {
  generateTopicMetadata,
  ITopicRouteProps,
  renderTopicPage,
} from "../../../../src/widgets/TopicPage/route";

export async function generateMetadata(props: ITopicRouteProps) {
  return generateTopicMetadata("history", props);
}

export default async function Page(props: ITopicRouteProps) {
  return renderTopicPage("history", props);
}
