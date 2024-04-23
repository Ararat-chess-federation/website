import TrainersList from "../../../src/shared/trainersList/TrainersList";
import TrainingDays from "../../../src/shared/trainingDays/TrainingDays";
import Address from "../../../src/shared/address/Address";
import getData from "../../../src/helpers/getData";
import { IBranch } from "../../../src/models/interfaces/branch";
import { siteTitle } from "../../../src/constants/titles";
import NotFound from "../../not-found";
import getImageSrc from "../../../src/helpers/getImageSrc";

interface IBranchParams {
  params: { branchUrl: string };
}

export async function generateMetadata({ params }: IBranchParams) {
  const { data }: { data: IBranch[] } = await getData({
    type: "branches",
    searchUrl: params.branchUrl,
  });

  if (!data?.length) {
    return;
  }

  const { title, mainImage } = data[0].attributes;

  return {
    title: `${title} | ${siteTitle}`,
    description: title,
    openGraph: {
      images: getImageSrc(mainImage),
    },
  };
}

export default async function Branch({ params }: IBranchParams) {
  const { data }: { data: IBranch[] } = await getData({
    type: "branches",
    searchUrl: params.branchUrl,
  });

  if (!data?.length) {
    return <NotFound />;
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
