// // https://books-api.nomadcoders.workers.dev/lists
// // https://books-api.nomadcoders.workers.dev/list?name=hardcover-fiction

// const BASE_URL = "https://books-api.nomadcoders.workers.dev";

// module.exports = {
//   reactStrictMode: true,
  
//   // async redirects () {
//   //     return [
//   //       {
//   //         source : `list/:id*`,
//   //         destination : `https://books-api.nomadcoders.workers.dev/list?name=:display_name`,
//   //         permanent : false,
//   //       }
//   //     ]
//   // },

//   async rewrites() {
//     return [
//       {
//         source : "/api/lists",
//         destination : `${BASE_URL}/lists`,
//       },
//       {
//         source : "/api/list/:id",
//         destination : `${BASE_URL}/list?name=`, //데이터를 갖고오는곳
//       }
//     ]
//   }
// };