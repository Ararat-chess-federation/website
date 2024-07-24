import "./ChessGame.css"

export default function ChessGame({ link }: { link: string }) {
  const iframeRegex =
    /^<iframe width="600" height="371" src="https:\/\/lichess\.org\/study\/embed\/[A-Za-z0-9]+\/[A-Za-z0-9]+" frameborder=0><\/iframe>$/;
  const isValid = iframeRegex.test(link);

  return isValid ? (
    <div className="chess_game_container" dangerouslySetInnerHTML={{ __html: link }}></div>
  ) : null;
}
