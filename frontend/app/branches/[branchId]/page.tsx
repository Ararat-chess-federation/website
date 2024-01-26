import Link from "next/link";
import getData from "../../../src/helpers/getData";
import Address from "../../../src/shared/address/Address";
import TrainersList from "../../../src/shared/trainersList/TrainersList";
import Markdown from "react-markdown";
import TrainingDays from "../../../src/shared/trainingDays/TrainingDays";

export default async function Branch({ params }: any) {
  const { data } = await getData(
    `/api/branches?populate=deep&url=${params.branchId}`
  );

  console.log(data[0].attributes);

  return (
    <div>
      <h1>{data[0].attributes.title}</h1>
      <Address address={data[0].attributes.address} />
      <TrainersList trainers={data[0].attributes.trainers.data} />

      <TrainingDays attributes={data[0].attributes} />
    </div>
  );
}
