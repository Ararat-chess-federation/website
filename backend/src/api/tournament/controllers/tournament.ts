import { factories } from "@strapi/strapi";

const API = "api::tournament.tournament";
export default factories.createCoreController(API, ({ strapi }) => ({
  async find(ctx) {
    const service = strapi.service(API);
    const { data, meta } = await super.find(ctx);

    const modifiedData = await service.getTournamentsData(data.ids);
    const filteredData = modifiedData.filter((el) => el);

    return { data: filteredData, meta };
  },
}));
