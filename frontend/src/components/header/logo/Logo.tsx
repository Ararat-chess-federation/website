import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.webp";
import "./Logo.css";

export default function Logo() {
  return (
    <Link href="/">
      <Image src={logo} alt="logo" className="logo" priority />
    </Link>
  );
}
