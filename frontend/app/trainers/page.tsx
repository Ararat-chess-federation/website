import Link from "next/link";
import BranchesList from "../../src/shared/branchesList/BranchesList";
import Img from "../../src/shared/img/Img";
import getData from "../../src/helpers/getData";
import { ITrainer } from "../../src/models/interfaces/trainer";
import { siteTitle } from "../../src/constants/titles";
import "./trainers.css";
import NotFound from "../not-found";

export const metadata = {
  title: `Մարզիչներ | ${siteTitle}`,
  description: "Արարատի մարզի շախմատի ֆեդերացիայի մարզիչներ",
};

export default async function Branches() {
  const { data }: { data: ITrainer[] } = await getData({ type: "trainers" });

  if (!data?.length) {
    return <NotFound />;
  }

  return (
    <section>
      {data.map(({ attributes }) => {
        const { fullName, url, profilePhoto, branches } = attributes;

        return (
          <div key={fullName} className="trainer_card">
            <Link href={`/trainers/${url}`}>
              <Img
                width={150}
                height={150}
                src={profilePhoto}
                alt={fullName}
                className="trainer_img"
                priority={true}
              />
            </Link>

            <div className="trainer_info">
              <Link href={`/trainers/${url}`}>
                <h2 className="trainer_name">{fullName}</h2>
              </Link>

              <BranchesList branches={branches.data} />
            </div>
          </div>
        );
      })}
    </section>
  );
}
