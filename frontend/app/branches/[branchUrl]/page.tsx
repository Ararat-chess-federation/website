import TrainersList from "../../../src/shared/trainersList/TrainersList";
import TrainingDays from "../../../src/shared/trainingDays/TrainingDays";
import Address from "../../../src/shared/address/Address";
import DataNotFound from "../../../src/shared/dataNotFound/DataNotFound";
import getData from "../../../src/helpers/getData";
import { IBranch } from "../../../src/models/interfaces/branch";
import { siteTitle } from "../../../src/constants/titles";

interface IBranchParams {
  params: { branchUrl: string };
}

export async function generateMetadata({ params }: any) {
  const { data }: { data: IBranch[] } = await getData({
    type: "branches",
    searchUrl: params.branchUrl,
  });

  const { title } = data[0].attributes;

  return {
    title: `${title} | ${siteTitle}`,
    description: title,
  };
}

export default async function Branch({ params }: IBranchParams) {
  const { data }: { data: IBranch[] } = await getData({
    type: "branches",
    searchUrl: params.branchUrl,
  });

  if (!data?.length) {
    return <DataNotFound />;
  }

  const { title, address, trainers } = data[0].attributes;

  return (
    <div>
      <h1>{title}</h1>
      <Address address={address} />
      <TrainersList trainers={trainers.data} />

      <TrainingDays attributes={data[0].attributes} />
    </div>
  );
}
