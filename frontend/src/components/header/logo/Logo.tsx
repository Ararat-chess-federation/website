import Image from "next/image";
import Link from "next/link";
import "./Logo.css";

export default function Logo() {
  return (
    <Link href="/">
      <section className="logo_section">
        <Image
          src="/logo.webp"
          width={50}
          height={50}
          alt="logo"
          className="logo"
        />
      </section>
    </Link>
  );
}
