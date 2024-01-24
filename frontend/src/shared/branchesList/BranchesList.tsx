import Link from "next/link";
import "./BranchesList.css";

export default function BranchesList({
  branches,
  classNames = "",
  titleClassName = "",
}: {
  branches: any[];
  classNames?: string;
  titleClassName?: string;
}) {
  return (
    <div>
      <p className={titleClassName}>Մասնաճյուղեր՝</p>

      <div>
        <ul className={`trainer_branches_list ${classNames}`}>
          {branches.map((el: any) => (
            <li key={el.attributes.url} className="trainer_branches">
              <Link href={`/branches/${el.attributes.url}`}>
                {el.attributes.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
