"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  find: (ctx) => {
    return strapi.query("playlist").find(ctx.query, [
      {
        path: "canciones",
        populate: {
          path: "artistas",
        },
      },
      {
        path: "canciones",
        populate: {
          path: "generos",
        },
      },
    ]);
  },
};
