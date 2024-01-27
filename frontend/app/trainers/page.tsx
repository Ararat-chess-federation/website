import Image from "next/image";
import Link from "next/link";
import BranchesList from "../../src/shared/branchesList/BranchesList";
import getData from "../../src/helpers/getData";
import getImageSrc from "../../src/helpers/getImageSrc";
import "./trainers.css";

export default async function Branches() {
  const { data } = await getData("/api/trainers?populate=deep");

  return (
    <section>
      {data.map((el: any) => (
        <div key={el.attributes.fullName} className="trainer_card">
          <Link href={`/trainers/${el.attributes.url}`}>
            <Image
              width={100}
              height={100}
              alt={el.attributes.fullName}
              src={getImageSrc(data[0].attributes.mainImage)}
              className="trainer_img"
              priority
            />
          </Link>

          <div className="trainer_info">
            <Link href={`/trainers/${el.attributes.url}`}>
              <h2 className="trainer_name">{el.attributes.fullName}</h2>
            </Link>

            <BranchesList branches={el.attributes.branches.data} />
          </div>
        </div>
      ))}
    </section>
  );
}
