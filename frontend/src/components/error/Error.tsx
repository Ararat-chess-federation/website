import Link from "next/link";
import { useEffect } from "react";
import "./Error.css";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="error_container">
      <h1>Արքան շախի տակ է։ Ինչ-որ բան սխալ է գնացել</h1>
      <p>
        Մենք բախվեցինք իրավիճակի, որը նախատեսվատ չէր։ Կատարեք հետևյալ քայլերը
      </p>
      <ul>
        <li>Թարմացրեք էջը կամ վերադարձեք նախորդ էջ</li>
        <li>
          Համոզվեք, որ Ձեր ինտերնետ կապը նույնքան ուժեղ է, որքան զինվորային
          շղթան
        </li>
        <li>
          Եթե խնդիրը չի լուծվել, փորձեք կապ հաստատել մեր տեխնիկական
          գրոսսմայստերների հետ
        </li>
      </ul>
      <Link href="/contacts">
        <span>Կապ գրոսսմայստերների հետ</span>
      </Link>
    </div>
  );
}
