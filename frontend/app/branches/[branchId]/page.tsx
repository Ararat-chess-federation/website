import Link from "next/link";
import getData from "../../../src/helpers/getData";

export default async function Branch({ params }: any) {
  const { data } = await getData(
    `/api/branches?populate=deep&url=${params.branchId}`
  );

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
