export default {
  async beforeCreate(event) {
    const { publishDate } = event.params.data;
    event.params.data.publishDate = publishDate ? publishDate : new Date();
  },
  async beforeUpdate(event) {
    const { publishDate } = event.params.data;
    event.params.data.publishDate = publishDate ? publishDate : new Date();
  },
};
