import Link from "next/link";
import "./404.css";

export default function NotFound() {
  return (
    <div className="error_container">
      <h1>Անհնարին քայլ</h1>
      <p>Կարծես թե դուք փորձում եք կատարել անհնարին քայլ մեր խաղատախտակի վրա</p>
      <ul>
        <li>Եվս մեկ անգամ ստուգեք հղումը</li>
        <li>Ետ դրեք քայլը և ընտրեք հնարավոր հղում մենյուից</li>
        <li>Կամ հաձայնվեք ոչ-ոքի և վերադարձեք գլխավոր էջ</li>
      </ul>
      <Link href="/">
        <span> Խաղը կրկին սկսել</span>
      </Link>
    </div>
  );
}
