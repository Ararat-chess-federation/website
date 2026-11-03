import {
  generateTopicMetadata,
  ITopicRouteProps,
  renderTopicPage,
} from "../../../../src/widgets/TopicPage/route";

export async function generateMetadata(props: ITopicRouteProps) {
  return generateTopicMetadata("entertainment", props);
}

export default async function Page(props: ITopicRouteProps) {
  return renderTopicPage("entertainment", props);
}
