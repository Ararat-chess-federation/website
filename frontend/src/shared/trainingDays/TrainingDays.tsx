import Markdown from "react-markdown";
import { ITrainingDays } from "../../models/interfaces/trainingDays";

export default function TrainingDays({ attributes }: ITrainingDays) {
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
