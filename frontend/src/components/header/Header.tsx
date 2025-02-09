import Logo from "./logo/Logo";
import Navigation from "./navigation/Navigation";
import LiveTournaments from "./liveTournaments/LiveTournaments";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      {/* <LiveTournaments /> */}
    </header>
  );
}
