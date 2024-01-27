import getData from "../../../src/helpers/getData";
import Address from "../../../src/shared/address/Address";
import TrainersList from "../../../src/shared/trainersList/TrainersList";
import TrainingDays from "../../../src/shared/trainingDays/TrainingDays";

interface IBranchParams {
  params: { branchId: string };
}

export default async function Branch({ params }: IBranchParams) {
  const { data } = await getData(
    `/api/branches?populate=deep&filters[url][$eq]=${params.branchId}`
  );

  return (
    <div>
      <h1>{data[0].attributes.title}</h1>
      <Address address={data[0].attributes.address} />
      <TrainersList trainers={data[0].attributes.trainers.data} />

      <TrainingDays attributes={data[0].attributes} />
    </div>
  );
}
