import Link from "next/link";
import "./MoreButton.css";

export default function MoreButton({ link }: { link: string }) {
  return (
    <div className="more_button_container">
      <span className="more_button">
        <Link href={link}>Ավելին</Link>
      </span>
    </div>
  );
}
