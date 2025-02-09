import Link from "next/link";
import { IBranch } from "../../models/interfaces/branch";
import "./BranchesList.css";

export default function BranchesList({ branches }: { branches: IBranch[] }) {
  return (
    <div className="trainer_branches_list_container">
      <p className="trainer_branches_list_title">Մասնաճյուղեր՝</p>

      <ul className="trainer_branches_list">
        {branches.map((el) => (
          <li key={el.url} className="trainer_branches">
            <Link href={`/branches/${el.url}`}>
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
