import BranchesList from "../../../src/shared/branchesList/BranchesList";
import PhoneNumber from "../../../src/shared/phoneNumber/PhoneNumber";
import getData from "../../../src/helpers/getData";
import { ITrainer } from "../../../src/models/interfaces/trainer";
import { siteTitle } from "../../../src/constants/titles";
import NotFound from "../../not-found";
import getImageSrc from "../../../src/helpers/getMediaSrc";
import ModifiedMarkdown from "../../../src/hok/modifiedMarkdown";

interface ITrainerParams {
  params: Promise<{ trainerUrl: string }>;
}

export async function generateMetadata(props: ITrainerParams) {
  const params = await props.params;
  const { data }: { data: ITrainer[] } = await getData({
    type: "trainers",
    filters: {
      url: params.trainerUrl,
    },
  });

  if (!data?.length) {
    return <NotFound />;
  }

  const { fullName, profilePhoto } = data[0];

  return {
    title: `${fullName} | ${siteTitle}`,
    description: `Արարատի մարզի շախմատի ֆեդերացիայի մարզիչ ${fullName}ի կենսագրություն`,
    openGraph: {
      images: getImageSrc(profilePhoto),
    },
  };
}
export default async function Trainer(props: ITrainerParams) {
  const params = await props.params;
  const { data }: { data: ITrainer[] } = await getData({
    type: "trainers",
    filters: {
      url: params.trainerUrl,
    },
    populate: {
      branches: {
        fields: ["url", "title"],
      },
    },
  });

  if (!data?.length) {
    return <NotFound />;
  }

  const { fullName, phoneNumber, branches, bio } = data[0];

  return (
    <div>
      <h1>{fullName}</h1>

      <PhoneNumber phoneNumber={phoneNumber} />
      <BranchesList branches={branches} />

      <h2>Կենսագրություն</h2>
      <ModifiedMarkdown>{bio}</ModifiedMarkdown>
    </div>
  );
}
