import Markdown from "react-markdown";

export default function TrainingDays({ attributes }: { attributes: any }) {
  return (
    <div>
      <h3>Պարապմունքի օրեր</h3>

      {attributes.description.map((el: any, idx: number) => (
        <div key={idx}>
          <h4>{attributes.trainers.data[idx].attributes.fullName}</h4>
          <Markdown>{el.paragraph}</Markdown>
        </div>
      ))}
    </div>
  );
}
