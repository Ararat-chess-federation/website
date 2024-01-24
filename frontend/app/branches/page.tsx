import Image from "next/image";
import Link from "next/link";
import getData from "../../src/helpers/getData";
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
              <h2>{el.attributes.title}</h2>
            </Link>
            <div> Հասցե՝ {el.attributes.address}</div>
            <span>Մարզիչներ՝ </span>
            <ul className="branches_trainer_list">
              {data[0].attributes.trainers.data.map((el: any) => (
                <li key={el.attributes.url} className="branches_trainer">
                  <Link href={`/branches/${el.attributes.url}`}>
                    {el.attributes.fullName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
