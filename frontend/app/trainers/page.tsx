import Image from "next/image";
import Link from "next/link";
import BranchesList from "../../src/shared/branchesList/BranchesList";
import getData from "../../src/helpers/getData";
import getImageSrc from "../../src/helpers/getImageSrc";
import { ITrainer } from "../../src/models/interfaces/trainer";
import "./trainers.css";
import Img from "../../src/shared/img/Img";

export default async function Branches() {
  const { data }: { data: ITrainer[] } = await getData({ type: "trainers" });

  return (
    <section>
      {data.map(({ attributes }) => {
        const { fullName, url, profilePhoto, branches } = attributes;

        return (
          <div key={fullName} className="trainer_card">
            <Link href={`/trainers/${url}`}>
              <Img
                width={100}
                height={100}
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
