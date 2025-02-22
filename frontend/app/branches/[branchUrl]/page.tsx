import TrainersList from "../../../src/shared/trainersList/TrainersList";
import TrainingDays from "../../../src/shared/trainingDays/TrainingDays";
import Address from "../../../src/shared/address/Address";
import getData from "../../../src/helpers/getData";
import { IBranch } from "../../../src/models/interfaces/branch";
import { siteTitle } from "../../../src/constants/titles";
import NotFound from "../../not-found";
import getImageSrc from "../../../src/helpers/getMediaSrc";

interface IBranchParams {
  params: Promise<{ branchUrl: string }>;
}

export async function generateMetadata(props: IBranchParams) {
  const params = await props.params;
  const { data }: { data: IBranch[] } = await getData({
    type: "branches",
    filters: { url: params.branchUrl },
  });

  if (!data?.length) {
    return;
  }

  const { title, mainImage } = data[0];

  return {
    title: `${title} | ${siteTitle}`,
    description: title,
    openGraph: {
      images: getImageSrc(mainImage),
    },
  };
}

export default async function Branch(props: IBranchParams) {
  const params = await props.params;
  const { data }: { data: IBranch[] } = await getData({
    type: "branches",
    filters: { url: params.branchUrl },
    populate: {
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

  const { title, address, trainers } = data[0];

  return (
    <div>
      <h1>{title}</h1>
      <Address address={address} />
      <TrainersList trainers={trainers} />

      <TrainingDays data={data[0]} />
    </div>
  );
}
