import getTotalRows from "../helpers/getTotalRows";
import tableToJson from "../helpers/tableStrToJson";

const API = "api::ratings.ratings";

export default ({ strapi }) => ({
  async getRatings(ctx) {
    const { grid, page } = ctx.request.query;
    const service = strapi.service(API);

    const formData = service.getFormData(grid);
    const { table, pagination } = await service.getTableHtml({
      formData,
      page,
    });

    const data = tableToJson(table);
    const total = getTotalRows(pagination);

    return { data, meta: { pagination: { total } } };
  },
});
