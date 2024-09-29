import "./ChessGame.css";

export default function ChessGame({ link }: { link: string }) {
  return (
    <div
      className="chess_game_container"
      dangerouslySetInnerHTML={{ __html: link }}
    ></div>
  );
}
