import {
  ISectionRouteProps,
  redirectToFirstTopic,
} from "../../../src/widgets/TopicPage/route";

export default async function Page(props: ISectionRouteProps) {
  return redirectToFirstTopic("entertainment", props);
}
