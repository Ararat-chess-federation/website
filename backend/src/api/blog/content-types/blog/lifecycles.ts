export default {
    async beforeCreate(event) {
        const { publishDate } = event.params.data;
        console.log({publishDate});
        
        event.params.data.publishDate = publishDate ? publishDate : new Date();
    },
}