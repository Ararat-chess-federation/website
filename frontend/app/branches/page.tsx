import Image from "next/image";
import Link from "next/link";
import getData from "../../src/helpers/getData";
import Address from "../../src/shared/address/Address";
import TrainersList from "../../src/shared/trainersList/TrainersList";
import "./branches.css";

export default async function Branches() {
  const { data } = await getData("/api/branches?populate=deep");
  console.log(data);

  return (
    <section>
      {data.map((el: any) => (
        <div key={el.attributes.url} className="branch_card">
          <div className="branch_photo">
            <Link
              href={`/branches/${el.attributes.url}`}
              key={el.attributes.url}
            >
              <Image
                width={100}
                height={100}
                src={`http://localhost:1337${el.attributes.mainImage.data.attributes.url}`}
                alt={el.attributes.url}
                className="branch_img"
              />
            </Link>
          </div>

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
