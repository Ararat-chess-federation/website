import Markdown from "react-markdown";
import BranchesList from "../../../src/shared/branchesList/BranchesList";
import PhoneNumber from "../../../src/shared/phoneNumber/PhoneNumber";
import getData from "../../../src/helpers/getData";
import "../trainers.css";

interface ITrainerParams {
  params: { trainerId: string };
}

export default async function Trainer({ params }: ITrainerParams) {
  const { data } = await getData(
    `/api/trainers?populate=deep&filters[url][$eq]=${params.trainerId}`
  );

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
