import Link from "next/link";
import Markdown from "react-markdown";

export default async function Trainer({ params }: any) {
  const { data } = await getData(params.trainerId);

  return (
    <div>
      <h1>{data[0].attributes.fullName}</h1>

      <span>Հեռախոսահամար՝ </span>
      <a href={`tel:${data[0].attributes.phoneNumber}`}>
        {data[0].attributes.phoneNumber}
      </a>

      <div>Մասնաճյուղեր՝</div>
      <ul className="trainer_branches_list">
        {data[0].attributes.branches.data.map((el: any) => (
          <li key={el.attributes.url} className="trainer_branches">
            <Link href={`/branches/${el.attributes.url}`}>
              {el.attributes.address}
            </Link>
          </li>
        ))}
      </ul>

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
