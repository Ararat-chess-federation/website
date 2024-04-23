import Markdown from "react-markdown";
import BranchesList from "../../../src/shared/branchesList/BranchesList";
import PhoneNumber from "../../../src/shared/phoneNumber/PhoneNumber";
import getData from "../../../src/helpers/getData";
import { ITrainer } from "../../../src/models/interfaces/trainer";
import "../trainers.css";
import { siteTitle } from "../../../src/constants/titles";
import NotFound from "../../not-found";
import getImageSrc from "../../../src/helpers/getImageSrc";

interface ITrainerParams {
  params: { trainerUrl: string };
}

export async function generateMetadata({ params }: ITrainerParams) {
  const { data }: { data: ITrainer[] } = await getData({
    type: "trainers",
    searchUrl: params.trainerUrl,
  });

  if (!data?.length) {
    return <NotFound />;
  }

  const { fullName, profilePhoto } = data[0].attributes;

  return {
    title: `${fullName} | ${siteTitle}`,
    description: `Արարատի մարզի շախմատի ֆեդերացիայի մարզիչ ${fullName}ի կենսագրություն`,
    openGraph: {
      images: getImageSrc(profilePhoto),
    },
  };
}
export default async function Trainer({ params }: ITrainerParams) {
  const { data }: { data: ITrainer[] } = await getData({
    type: "trainers",
    searchUrl: params.trainerUrl,
  });

  if (!data?.length) {
    return <NotFound />;
  }

  const { fullName, phoneNumber, branches, bio } = data[0].attributes;

  return (
    <div>
      <h1>{fullName}</h1>

      <PhoneNumber phoneNumber={phoneNumber} />
      <BranchesList branches={branches.data} />

      <h2>Կենսագրություն</h2>
      <Markdown>{bio}</Markdown>
    </div>
  );
}
