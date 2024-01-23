import Markdown from "react-markdown";

import Image from "next/image";

export default async function About() {
  const data = await getData();
  const { about } = data.data.attributes;

  return (
    <main>
      <h1>Ֆեդերացիայի պատմություն</h1>

      {about.map((el: any, idx: number) => {
        if (el.__component === "text.paragraph") {
          return <Markdown key={el.paragraph}>{el.paragraph}</Markdown>;
        }

        if (el.__component === "img.img-with-description") {
          return (
            <figure key={idx + 1000}>
              <Image
                width={100}
                height={100}
                src={`http://localhost:1337${el.image.data.attributes.url}`}
                alt={el.description}
              />
              <figcaption>{el.description}</figcaption>
            </figure>
          );
        }
      })}
    </main>
  );
}

async function getData() {
  try {
    const res = await fetch("http://localhost:1337/api/about?populate=deep");
    return res.json();
  } catch (e) {
    console.log(e);
  }
}
