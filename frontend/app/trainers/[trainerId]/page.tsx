import Link from "next/link";
import Markdown from "react-markdown";
import "../trainers.css";

export default async function Trainer({ params }: any) {
  const { data } = await getData(params.trainerId);

  return (
    <div>
      <h1>{data[0].attributes.fullName}</h1>

      <p>
        Հեռախոսահամար՝
        <a
          className="phone_number"
          href={`tel:${data[0].attributes.phoneNumber}`}
        >
          {data[0].attributes.phoneNumber}
        </a>
      </p>

      <p>Մասնաճյուղեր՝</p>

      <div>
        <ul className="trainer_branches_list trainer_branches_list_bio">
          {data[0].attributes.branches.data.map((el: any) => (
            <li key={el.attributes.url} className="trainer_branches">
              <Link href={`/branches/${el.attributes.url}`}>
                {el.attributes.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <h2>Կենսագրություն</h2>
      <Markdown>{data[0].attributes.bio}</Markdown>
    </div>
  );
}

async function getData(url: string) {
  try {
    const res = await fetch(
      `http://localhost:1337/api/trainers?populate=deep&url=${url}`
    );
    return res.json();
  } catch (e) {
    console.log(e);
  }
}
