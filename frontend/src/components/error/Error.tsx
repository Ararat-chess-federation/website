import { useEffect } from "react";
import "./Error.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="error_container">
      <h2>Ինչ-որ բան սխալ է գնացել</h2>
      <p>
        Փորձեք թարմացնել էջը, կրկին սխալ ստանալու դեպքում խնդրում ենք զանգահարել{" "}
        <a className="phone_number_link" href={`tel:+37498339020`}>
          098339020
        </a>{" "}
        կամ գրել մեր ֆեյսբուքյան էջին
      </p>
      <button className="update_button" onClick={() => reset()}>
        Թարմացնել
      </button>
    </div>
  );
}
