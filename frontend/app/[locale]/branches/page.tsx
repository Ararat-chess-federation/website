import getData from "../../../src/helpers/getData";
import { IBranch } from "../../../src/models/interfaces/branch";
import { siteTitle } from "../../../src/constants/titles";
import NotFound from "../../not-found";
import BranchesPage from "../../../src/widgets/BranchesPage";
import { TLang } from "../../../src/models/interfaces/getData";

export const metadata = {
  title: `Մասնաճյուղեր | ${siteTitle}`,
  description: "Արարատի մարզի շախմատի ֆեդերացիայի մասնաճյուղերի ցանկ",
};

interface IBranchesProps {
  searchParams: Promise<{
    page: string;
  }>;
  params: Promise<{ locale: TLang }>;
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
