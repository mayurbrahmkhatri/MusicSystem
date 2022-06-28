const joi = require('@hapi/joi');

const schema = {
  playlist: joi.object({
    playlist_name: joi.string().max(50).required(),
    // user_name: joi.string().required(),
  }),
};

module.exports = schema;
