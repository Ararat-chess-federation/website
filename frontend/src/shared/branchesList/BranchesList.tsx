import { IBranch } from "../../models/interfaces/branch";
import "./BranchesList.css";
import { SubTitle } from "./SubTitle";

export default function BranchesList({ branches }: { branches: IBranch[] }) {
  return (
    <div className="trainer_branches_list_container">
      <SubTitle />
      <ul className="trainer_branches_list">
        {branches.map((el) => (
          <li key={el.url} className="trainer_branches">
            {el.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
