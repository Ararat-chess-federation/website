import NotFound from "../../not-found";
import BranchesPage from "../../../src/widgets/BranchesPage";
import getData from "../../../src/helpers/getData";
import generatePageMetadata from "../../../src/helpers/generatePageMetadata";
import { IBranch } from "../../../src/models/interfaces/branch";
import { IBranchesProps } from "../../../src/models/interfaces/params";

export async function generateMetadata(props: IBranchesProps) {
  const { locale } = await props.params;

  return generatePageMetadata({ type: "branches", locale })
}

export default async function Branches(props: IBranchesProps) {
  const { locale } = await props.params;
  const { data }: { data: IBranch[] } = await getData({
    type: "branches",
    locale,
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
