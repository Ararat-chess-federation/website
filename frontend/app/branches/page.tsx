import getData from "../../src/helpers/getData";
import { IBranch } from "../../src/models/interfaces/branch";
import { siteTitle } from "../../src/constants/titles";
import NotFound from "../not-found";
import BranchesPage from "../../src/widgets/BranchesPage";

export const metadata = {
  title: `Մասնաճյուղեր | ${siteTitle}`,
  description: "Արարատի մարզի շախմատի ֆեդերացիայի մասնաճյուղերի ցանկ",
};

export default async function Branches() {
  const { data }: { data: IBranch[] } = await getData({
    type: "branches",
    populate: {
      mainImage: {
        fields: ["url"],
      },
      trainers: {
        fields: ["url", "fullName"],
      },
      description: {
        fields: ["paragraph"],
      },
    },
  });

  if (!data?.length) {
    return <NotFound />;
  }

  return <BranchesPage data={data} />;
}
