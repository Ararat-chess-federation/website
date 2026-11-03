import {
  generateTopicMetadata,
  ITopicRouteProps,
  renderTopicPage,
} from "../../../../src/widgets/TopicPage/route";

export async function generateMetadata(props: ITopicRouteProps) {
  return generateTopicMetadata("learn", props);
}

export default async function Page(props: ITopicRouteProps) {
  return renderTopicPage("learn", props);
}
