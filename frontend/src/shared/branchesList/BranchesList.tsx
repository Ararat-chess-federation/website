import Link from "next/link";
import "./BranchesList.css";

export default function BranchesList({ branches }: { branches: any[] }) {
  return (
    <div className="trainer_branches_list_container">
      <p className="trainer_branches_list_title">Մասնաճյուղեր՝</p>

      <ul className="trainer_branches_list">
        {branches.map((el: any) => (
          <li key={el.attributes.url} className="trainer_branches">
            <Link href={`/branches/${el.attributes.url}`}>
              {el.attributes.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
