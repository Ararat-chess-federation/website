import Image from "next/image";
import Link from "next/link";

export default async function Branches() {
  const data = await getData();

  return (
    <main>
      {data.data.map((el: any) => (
        <Link href={`/branches/${el.attributes.url}`} key={el.attributes.url}>
          <Image
            width={100}
            height={100}
            src={`http://localhost:1337${el.attributes.mainImage.data.attributes.url}`}
            alt={el.attributes.url}
          />
          address: {el.attributes.address}
        </Link>
      ))}
    </main>
  );
}

async function getData() {
  try {
    const res = await fetch("http://localhost:1337/api/branches?populate=deep");
    return res.json();
  } catch (e) {
    console.log(e);
  }
}
