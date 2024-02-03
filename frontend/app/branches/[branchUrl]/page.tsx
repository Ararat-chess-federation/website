import TrainersList from "../../../src/shared/trainersList/TrainersList";
import TrainingDays from "../../../src/shared/trainingDays/TrainingDays";
import Address from "../../../src/shared/address/Address";
import DataNotFound from "../../../src/shared/dataNotFound/DataNotFound";
import getData from "../../../src/helpers/getData";
import { IBranch } from "../../../src/models/interfaces/branch";

interface IBranchParams {
  params: { branchUrl: string };
}

export const metadata = {
  title: "",
};

export default async function Branch({ params }: IBranchParams) {
  const { data }: { data: IBranch[] } = await getData({
    type: "branches",
    searchUrl: params.branchUrl,
  });

  if (!data?.length) {
    return <DataNotFound />;
  }

  const { title, address, trainers } = data[0].attributes;
  metadata.title = title + " | Արարատի մարզի շախմատի ֆեդերացիա";

  return (
    <div>
      <h1>{title}</h1>
      <Address address={address} />
      <TrainersList trainers={trainers.data} />

      <TrainingDays attributes={data[0].attributes} />
    </div>
  );
}
