import Image from "next/image";
import logo from "../../../public/logo.webp";
import styles from "./Logo.module.scss";
import NavigationLink from "../../components/NavigationLink";

export default function Logo({ className }: { className?: string }) {
  return (
    <NavigationLink href="/">
      <Image src={logo} alt="logo" className={`${styles.logo} ${className}`} priority />
    </NavigationLink>
  );
}
