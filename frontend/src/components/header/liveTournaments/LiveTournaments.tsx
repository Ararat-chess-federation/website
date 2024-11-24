import getData from "../../../helpers/getData";
import { use } from "react";
import Image from "next/image";
import "./LiveTournaments.css";

interface ITournamentData {
  image: string;
  url: string;
  standings: string;
}

export default function LiveTournaments() {
  const { data } = use(getData({ type: "tournament" }));

  if (!data || !data.length) {
    return null;
  }

  return (
    <>
      <li className="live">
        LIVE
        <div className="tournaments">
          {data.map((el: ITournamentData) => (
            <Tournament key={el.url} tournament={el} />
          ))}
        </div>
      </li>
    </>
  );
}

function Tournament({ tournament }: { tournament: ITournamentData }) {
  if (!tournament) {
    return null;
  }

  const { image, standings, url } = tournament;
  return (
    <div key={url} className="live_container">
      <Image src={image} alt="image" width={100} height={50} />
      <div>
        <ExternalLink title="Պարտիաներ" url={url} />
        <ExternalLink title="Մրցաշարային աղյուսակ" url={standings} />
      </div>
    </div>
  );
}

function ExternalLink({ title, url }: { title: string; url: string }) {
  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </div>
  );
}
