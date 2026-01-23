import { siteTitle } from "../../../src/constants/titles";
import { RatingPage } from "../../../src/widgets/RatingPage";

export const metadata = {
  title: `Վարկանիշներ և կարգեր | ${siteTitle}`,
  description: "Արարատի մարզի շախմատի ֆեդերացիայի վարկանիշներ և կարգեր",
};

export default function Ratings() {
  return <RatingPage />;
}
