import Link from "next/link";
import TrainersList from "../../src/shared/trainersList/TrainersList";
import Address from "../../src/shared/address/Address";
import Img from "../../src/shared/img/Img";
import getData from "../../src/helpers/getData";
import { IBranch } from "../../src/models/interfaces/branch";
import { siteTitle } from "../../src/constants/titles";
import "./branches.css";
import NotFound from "../not-found";

export const metadata = {
  title: `Մասնաճյուղեր | ${siteTitle}`,
  description: "Արարատի մարզի շախմատի ֆեդերացիայի մասնաճյուղերի ցանկ",
};

export default async function Branches() {
  const { data }: { data: IBranch[] } = await getData({
    type: "branches",
    populate: {
      mainImage: {
        fields: ["url"],
      },
      trainers: {
        fields: ["url", "fullName"],
      },
    },
  });

  if (!data?.length) {
    return <NotFound />;
  }

  return (
    <section>
      {data.map(({ url, mainImage, title, address, trainers }) => {
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
              <TrainersList trainers={trainers} />
            </div>
          </div>
        );
      })}
    </section>
  );
}
