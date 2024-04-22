import Link from "next/link";
import TrainersList from "../../src/shared/trainersList/TrainersList";
import Address from "../../src/shared/address/Address";
import Img from "../../src/shared/img/Img";
import DataNotFound from "../../src/shared/dataNotFound/DataNotFound";
import getData from "../../src/helpers/getData";
import { IBranch } from "../../src/models/interfaces/branch";
import "./branches.css";

export const metadata = {
  title: "Մասնաճյուղեր | Արարատի մարզի շախմատի ֆեդերացիա",
};

export default async function Branches() {
  const { data }: { data: IBranch[] } = await getData({ type: "branches" });

  if (!data?.length) {
    return <DataNotFound />;
  }

  return (
    <section>
      {data.map(({ attributes }) => {
        const { url, mainImage, title, address } = attributes;

        return (
          <div key={url} className="branch_card">
            <Link href={`/branches/${url}`}>
              <Img
                width={150}
                height={150}
                src={mainImage}
                alt={url}
                className="branch_img"
              />
            </Link>

            <div className="branch_info">
              <Link href={`/branches/${url}`}>
                <h2 className="branch_name">{title}</h2>
              </Link>
              <Address address={address} />
              <TrainersList trainers={data[0].attributes.trainers.data} />
            </div>
          </div>
        );
      })}
    </section>
  );
}
