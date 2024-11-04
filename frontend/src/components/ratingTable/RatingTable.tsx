export default function RatingTable({ ratings }: { ratings: string[][] }) {
  return (
    <table>
      <thead>
        <tr>
          {ratings[0].map((el: string) => (
            <th key={el}>{el}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {ratings.slice(1).map((el: string[], idx: number) => (
          <tr key={idx}>
            {el.map((nextEl, idx) => (
              <td key={idx}>
                {nextEl.includes("/am/profile") ? (
                  <a href={`https://chessfed.am${nextEl}`} target="_blank">
                    Պրոֆիլ ՀՇՖ կայքում
                  </a>
                ) : (
                  nextEl
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
