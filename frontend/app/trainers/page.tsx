import Image from "next/image";
import Link from "next/link";
import BranchesList from "../../src/shared/branchesList/BranchesList";
import "./trainers.css";

export default async function Branches() {
  const { data } = await getData();

  return (
    <section>
      {data.map((el: any) => (
        <div key={el.attributes.fullName} className="trainer_card">
          <Link href={`/trainers/${el.attributes.url}`}>
            <Image
              width={100}
              height={100}
              alt={el.attributes.fullName}
              src={`http://localhost:1337${data[0].attributes.profilePhoto.data.attributes.url}`}
              className="trainer_img"
              priority
            />
          </Link>

          <div className="trainer_info">
            <Link href={`/trainers/${el.attributes.url}`}>
              <h2 className="trainer_name">{el.attributes.fullName}</h2>
            </Link>

            <BranchesList
              branches={el.attributes.branches.data}
              titleClassName="trainer_branches_title"
            />
          </div>
        </div>
      ))}
    </section>
  );
}

async function getData() {
  try {
    const res = await fetch("http://localhost:1337/api/trainers?populate=deep");
    return res.json();
  } catch (e) {
    console.log(e);
  }
}
