import { factories } from "@strapi/strapi";
import axios from "axios";

const BASE_URL = "https://lichess.org/api/broadcast";

export default factories.createCoreService(
  "api::tournament.tournament",
  ({ strapi }) => ({
    async getTournamentsData(idsStr: string) {
      const ids: string[] = idsStr.split(",");

      return Promise.all(
        ids.map(async (id) => await getTournamentById(id.trim()))
      );
    },
  })
);

async function getTournamentById(id: string) {
  try {
    const res = await axios.get(`${BASE_URL}/${id}`);
    const { tour, rounds } = res.data;

    const ongoingRound = rounds.find((el) => !el.finished);
    if (!ongoingRound) {
      return null;
    }

    const { url } = ongoingRound;
    const { info, image } = tour;
    const { standings } = info;
    const FED_QUERY = "&fedb=ARM";

    return { url, image, standings: `${standings}${FED_QUERY}` };
  } catch (e) {
    console.log(`Error fetching data from lichess with id: ${id}`, e.message);
    return null;
  }
}
