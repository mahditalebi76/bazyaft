'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {


  findNameAndId:
    async (ctx) => {
      const result = await strapi.query("landfills").model.fetchAll({
        columns: ["id", "Name"],
        // withRelated: [
        //   {
        //     'basecategory': qb => {qb.columns("id","name")},
        //     'image': qb => {qb.columns('id','url')},
        //   },
        // ],
      });
      ctx.send(result)
    },

  // .populate('orders', 'amount');


};

