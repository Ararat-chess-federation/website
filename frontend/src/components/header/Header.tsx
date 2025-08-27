import Logo from "../../shared/logo/Logo";
import Navigation from "./navigation";
import LiveTournaments from "./liveTournaments/LiveTournaments";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
      <LiveTournaments />
    </header>
  );
}

