import ModifiedMarkdown from "../../hok/modifiedMarkdown";
import { ITrainingDays } from "../../models/interfaces/trainingDays";

export default function TrainingDays({ data }: { data: ITrainingDays }) {
  return (
    <div>
      <h3>Պարապմունքի օրեր</h3>

      {data.description.map((el, idx: number) => (
        <div key={idx}>
          <h4>{data.trainers[idx].fullName}</h4>
          <ModifiedMarkdown>{el.paragraph}</ModifiedMarkdown>
        </div>
      ))}
    </div>
  );
}
