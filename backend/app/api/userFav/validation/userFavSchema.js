const joi = require('@hapi/joi');

const schema = {
  userFav: joi.object({
    user_name: joi.string().required(),
    song_id: joi.number().required(),
  }),
};

module.exports = schema;
