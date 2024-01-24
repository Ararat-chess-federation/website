import Image from "next/image";
import Link from "next/link";
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

            <p className="trainer_branches_title">Մասնաճյուղեր՝</p>

            <div>
              <ul className="trainer_branches_list">
                {el.attributes.branches.data.map((el: any) => (
                  <li key={el.attributes.url} className="trainer_branches">
                    <Link href={`/branches/${el.attributes.url}`}>
                      {el.attributes.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
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
