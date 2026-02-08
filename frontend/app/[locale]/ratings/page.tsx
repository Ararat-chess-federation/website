import { RatingPage } from "../../../src/widgets/RatingPage";
import generatePageMetadata from "../../../src/helpers/generatePageMetadata";
import { IPageProps } from "../../../src/models/interfaces/params";

export async function generateMetadata(props: IPageProps) {
  const { locale } = await props.params;

  return generatePageMetadata({ type: "ratings", locale })
}

export default function Ratings() {
  return <RatingPage />;
}
