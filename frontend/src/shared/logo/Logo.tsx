import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.webp";
import styles from "./Logo.module.scss";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/">
      <Image src={logo} alt="logo" className={`${styles.logo} ${className}`} priority />
    </Link>
  );
}
