import Image from "next/image";
import Link from "next/link";
import TrainersList from "../../src/shared/trainersList/TrainersList";
import Address from "../../src/shared/address/Address";
import getData from "../../src/helpers/getData";
import getImageSrc from "../../src/helpers/getImageSrc";
import { IBranch } from "../../src/models/interfaces/branch";
import "./branches.css";
import Img from "../../src/shared/img/Img";

export default async function Branches() {
  const { data }: { data: IBranch[] } = await getData({ type: "branches" });

  return (
    <section>
      {data.map((el) => (
        <div key={el.attributes.url} className="branch_card">
          <Link href={`/branches/${el.attributes.url}`}>
            <Img
              width={100}
              height={100}
              src={el.attributes.mainImage}
              alt={el.attributes.url}
              className="branch_img"
            />
          </Link>

          <div className="branch_info">
            <Link href={`/branches/${el.attributes.url}`}>
              <h2 className="branch_name">{el.attributes.title}</h2>
            </Link>
            <Address address={el.attributes.address} />
            <TrainersList trainers={data[0].attributes.trainers.data} />
          </div>
        </div>
      ))}
    </section>
  );
}
