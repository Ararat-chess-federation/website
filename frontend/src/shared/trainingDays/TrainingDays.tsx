import Markdown from "react-markdown";
import { IImage } from "../../models/interfaces/image";
import { ITrainer } from "../../models/interfaces/trainer";

interface IAttributes {
  attributes: {
    url: string;
    address: string;
    mapUrl: string | null;
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    trainers: { data: ITrainer[] };
    mainImage: { data: IImage };
    description: { id: number; paragraph: string }[];
  };
}

export default function TrainingDays({ attributes }: IAttributes) {
  return (
    <div>
      <h3>Պարապմունքի օրեր</h3>

      {attributes.description.map((el, idx: number) => (
        <div key={idx}>
          <h4>{attributes.trainers.data[idx].attributes.fullName}</h4>
          <Markdown>{el.paragraph}</Markdown>
        </div>
      ))}
    </div>
  );
}
