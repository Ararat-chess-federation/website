import Markdown from "react-markdown";
import BranchesList from "../../../src/shared/branchesList/BranchesList";
import PhoneNumber from "../../../src/shared/phoneNumber/PhoneNumber";
import getData from "../../../src/helpers/getData";
import "../trainers.css";
import { ITrainer } from "../../../src/models/interfaces/trainer";

interface ITrainerParams {
  params: { trainerUrl: string };
}

export default async function Trainer({ params }: ITrainerParams) {
  const { data }: { data: ITrainer[] } = await getData({
    type: "trainers",
    searchUrl: params.trainerUrl,
  });

  return (
    <div>
      <h1>{data[0].attributes.fullName}</h1>

      <PhoneNumber phoneNumber={data[0].attributes.phoneNumber} />
      <BranchesList branches={data[0].attributes.branches.data} />

      <h2>Կենսագրություն</h2>
      <Markdown>{data[0].attributes.bio}</Markdown>
    </div>
  );
}
