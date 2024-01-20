import Link from "next/link";

export default async function Branch({ params }: any) {
  const { data } = await getData(params.branchId);
  console.log(data[0]);

  return (
    <div>
      <h1>{data[0].attributes.title}</h1>
      <div>Հասցե՝ {data[0].attributes.address}</div>

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
  );
}

async function getData(url: string) {
  try {
    const res = await fetch(
      `http://localhost:1337/api/branches?populate=deep&url=${url}`
    );
    return res.json();
  } catch (e) {
    console.log(e);
  }
}
