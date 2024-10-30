export default {
  routes: [
    {
     method: 'GET',
     path: '/ratings',
     handler: 'ratings.getRatings',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
