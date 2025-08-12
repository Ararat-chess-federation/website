import getData from "../../src/helpers/getData";
import { ITrainer } from "../../src/models/interfaces/trainer";
import { siteTitle } from "../../src/constants/titles";
import NotFound from "../not-found";
import TrainersPage from "../../src/widgets/Trainers";

export const metadata = {
  title: `Մարզիչներ | ${siteTitle}`,
  description: "Արարատի մարզի շախմատի ֆեդերացիայի մարզիչներ",
};

export default async function Branches() {
  const { data }: { data: ITrainer[] } = await getData({
    type: "trainers",
    populate: {
      profilePhoto: {
        fields: ["url"],
      },
      branches: {
        fields: ["url", "title"],
      },
    },
  });

  if (!data?.length) {
    return <NotFound />;
  }

  return (
    <TrainersPage data={data} />
  );
}
