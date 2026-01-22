import axios from "axios";
const URL = "https://chessfed.am/am/players-ratings";

export default () => ({
  getFormData(grid: "national" | "qualification-rules") {
    return `filters[id_or_name]=&filters[state]=%D4%B1%D6%80%D5%A1%D6%80%D5%A1%D5%BF&filters[tit]=&filters[gender]=&filters[birth_from]=&filters[birth_to]=&filters[srtng_from]=&filters[srtng_to]=&grid=${grid}`;
  },
  async getTableHtml({ formData, page }: { formData: string; page: string }) {
    try {
      const response = await axios.post(`${URL}/?page=${page}`, formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-Requested-With": "XMLHttpRequest",
        },
      });
console.log({formData});
      
      const { table, pagination } = response.data;

      return { table, pagination };
    } catch (error) {
      console.error("Error:", error);
    }
  },
});
