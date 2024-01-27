import Link from "next/link";
import { ITrainer } from "../../models/interfaces/trainer";
import "./TrainersList.css";

export default function TrainersList({ trainers }: { trainers: ITrainer[] }) {
  return (
    <div className="branches_list_container">
      <span>Մարզիչներ՝ </span>
      <ul className="branches_trainer_list">
        {trainers.map((el) => (
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
