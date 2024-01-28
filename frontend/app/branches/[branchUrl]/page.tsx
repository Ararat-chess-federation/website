import TrainersList from "../../../src/shared/trainersList/TrainersList";
import TrainingDays from "../../../src/shared/trainingDays/TrainingDays";
import Address from "../../../src/shared/address/Address";
import getData from "../../../src/helpers/getData";
import { IBranch } from "../../../src/models/interfaces/branch";

interface IBranchParams {
  params: { branchUrl: string };
}

export default async function Branch({ params }: IBranchParams) {
  const { data }: { data: IBranch[] } = await getData({
    type: "branches",
    searchUrl: params.branchUrl,
  });

  return (
    <div>
      <h1>{data[0].attributes.title}</h1>
      <Address address={data[0].attributes.address} />
      <TrainersList trainers={data[0].attributes.trainers.data} />

      <TrainingDays attributes={data[0].attributes} />
    </div>
  );
}
