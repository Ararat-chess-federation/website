import Markdown from "react-markdown";
import BranchesList from "../../../src/shared/branchesList/BranchesList";
import PhoneNumber from "../../../src/shared/phoneNumber/PhoneNumber";
import "../trainers.css";

export default async function Trainer({ params }: any) {
  const { data } = await getData(params.trainerId);

  return (
    <div>
      <h1>{data[0].attributes.fullName}</h1>

      <PhoneNumber phoneNumber={data[0].attributes.phoneNumber} />
      <BranchesList
        branches={data[0].attributes.branches.data}
        classNames="trainer_branches_list_bio"
      />

      <h2>Կենսագրություն</h2>
      <Markdown>{data[0].attributes.bio}</Markdown>
    </div>
  );
}

async function getData(url: string) {
  try {
    const res = await fetch(
      `http://localhost:1337/api/trainers?populate=deep&url=${url}`
    );
    return res.json();
  } catch (e) {
    console.log(e);
  }
}
