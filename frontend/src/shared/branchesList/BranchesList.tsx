import { useTranslations } from "next-intl";
import { IBranch } from "../../models/interfaces/branch";
import "./BranchesList.css";

export default function BranchesList({ branches }: { branches: IBranch[] }) {
  const t = useTranslations();
  return (
    <div className="trainer_branches_list_container">
      <p className="trainer_branches_list_title">{t("branches")}:</p>

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
